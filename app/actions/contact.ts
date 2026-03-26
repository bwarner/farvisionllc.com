"use server";
import z from "zod";
import sendMail from "../lib/mail";

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
    const { name, email, message } = formData;
    console.log("Sending contact formData:", formData);
    const result = await sendMail({
      replyTo: email,
      to: contactToAddress,
      subject: `Contact form submission from ${name}`,
      body: message,
    });

    console.log("sendMail result:", result);
    return { name, email, message, success: true, error: null };
  } catch (error) {
    // console.error('Validation error:', error);
    if (error instanceof z.ZodError) {
      const { formErrors, fieldErrors } = error.flatten();
      console.error("ZodError fieldErrors:", fieldErrors);

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
    console.error("Error sending contact form:", error);
    return { ...state, success: false, error: "Failed to send message" };
  }
}
