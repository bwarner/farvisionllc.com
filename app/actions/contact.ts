"use server";
import z from "zod";
import sendMail from "../lib/mail";

const contactToAddress =
  process.env.CONTACT_TO_ADDRESS || "info@farvisionllc.com";

const ContactFormStateSchema = z.object({
  name: z.string().trim().min(4),
  email: z.string().trim().min(4).email(),
  message: z.string().trim().min(10),
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
      from: email,
      to: contactToAddress,
      subject: `Contact form submission`,
      body: message,
    });

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
