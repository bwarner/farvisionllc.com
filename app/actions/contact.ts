"use server";
import z from "zod";
import sendMail from "../lib/mail";
import { checkRateLimit } from "../lib/rate-limit";

const contactToAddress =
  process.env.CONTACT_TO_ADDRESS || "info@farvisionllc.com";

const ContactFormStateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(4, "Name must be at least 4 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
  success: z.boolean().nullable(),
  error: z.string().nullable(),
  errors: z
    .object({
      formErrors: z.array(z.string()).optional(),
      fieldErrors: z.object({
        name: z.array(z.string()).optional(),
        email: z.array(z.string()).optional(),
        message: z.array(z.string()),
      }),
    })
    .optional(),
});

export type ContactFormState = z.infer<typeof ContactFormStateSchema>;

export async function sendContact(
  state: ContactFormState
): Promise<ContactFormState> {
  try {
    const formData = ContactFormStateSchema.parse(state);
    const { name, email, message, company } = formData;

    // Honeypot check — bots fill hidden fields
    if (company) {
      // Silently succeed to not tip off the bot
      return { name, email, message, success: true, error: null };
    }

    // Rate limiting by email
    const { allowed, retryAfterMs } = checkRateLimit(email);
    if (!allowed) {
      const retrySeconds = Math.ceil(retryAfterMs / 1000);
      return {
        ...state,
        success: false,
        error: `Too many submissions. Please try again in ${retrySeconds} seconds.`,
      };
    }

    // Strip newlines from subject to prevent header injection
    const sanitizedName = name.replace(/[\r\n]/g, "");

    const result = await sendMail({
      replyTo: email,
      to: contactToAddress,
      subject: `Contact form submission from ${sanitizedName}`,
      body: message,
    });

    if (result) {
      return { name, email, message, success: true, error: null };
    }

    return { ...state, success: false, error: "Failed to send message" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const { formErrors, fieldErrors } = error.flatten();

      return {
        ...state,
        success: false,
        error: "Invalid form data",
        errors: {
          formErrors,
          fieldErrors: {
            name: fieldErrors?.name || [],
            email: fieldErrors?.email || [],
            message: fieldErrors?.message || [],
          },
        },
      };
    }
    console.error("Contact form error:", error instanceof Error ? error.message : "Unknown error");
    return { ...state, success: false, error: "Failed to send message" };
  }
}
