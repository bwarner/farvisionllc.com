import z from "zod";
import sanitizeHtml from "sanitize-html";
import {
  SESv2Client,
  SendEmailCommand,
  SendEmailCommandInput,
} from "@aws-sdk/client-sesv2";

// Environment variable checks
if (
  !process.env.AWS_REGION ||
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY
) {
  throw new Error(
    "AWS_REGION, AWS_ACCESS_KEY_ID, and AWS_SECRET_ACCESS_KEY must be set"
  );
}

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const config = {
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
};
const client = new SESv2Client(config);

// Zod schema with custom transformations
const EmailSchema = z.object({
  from: z
    .string()
    .nonempty("From email cannot be empty")
    .email("Invalid email address")
    .trim(), // Trim whitespace
  to: z
    .string()
    .nonempty("To email cannot be empty")
    .email("Invalid email address")
    .trim(), // Trim whitespace
  subject: z
    .string()
    .nonempty("Subject cannot be empty")
    .trim()
    .transform<string>((str) => str.replace(/[<>]/g, "")), // Basic escaping with explicit type
  body: z
    .string()
    .nonempty("Body cannot be empty")
    .transform<string>((str) =>
      sanitizeHtml(str, {
        allowedTags: [], // Remove all HTML tags if the body should be plain text
        allowedAttributes: {},
      })
    ), // Sanitize HTML content with explicit type
});

type EmailData = z.infer<typeof EmailSchema>;

async function sendMail(data: EmailData) {
  // Validate and transform the data using the schema
  const validatedData = EmailSchema.parse(data);

  // Send email using validated and sanitized data
  const params: SendEmailCommandInput = {
    Destination: {
      ToAddresses: [validatedData.to],
    },
    Content: {
      Simple: {
        Body: {
          Text: {
            Data: validatedData.body,
          },
        },
        Subject: {
          Data: validatedData.subject,
        },
      },
    },
    FromEmailAddress: validatedData.from,
  };

  const command = new SendEmailCommand(params);
  console.log("Sending email:", validatedData);
  return client.send(command);
}

export default sendMail;
