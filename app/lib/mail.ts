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
const fromAddress =
  process.env.CONTACT_FROM_ADDRESS || "info@farvisionllc.com";

const EmailSchema = z.object({
  replyTo: z
    .string()
    .nonempty("Reply-to email cannot be empty")
    .email("Invalid email address")
    .trim(),
  to: z
    .string()
    .nonempty("To email cannot be empty")
    .email("Invalid email address")
    .trim(),
  subject: z
    .string()
    .nonempty("Subject cannot be empty")
    .trim()
    .transform<string>((str) => str.replace(/[<>\r\n]/g, "")),
  body: z
    .string()
    .nonempty("Body cannot be empty")
    .transform<string>((str) =>
      sanitizeHtml(str, {
        allowedTags: [],
        allowedAttributes: {},
      })
    ),
});

type EmailData = z.infer<typeof EmailSchema>;

async function sendMail(data: EmailData) {
  // Validate and transform the data using the schema
  const validatedData = EmailSchema.parse(data);

  // Send email from verified address, with visitor's email as Reply-To
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
    FromEmailAddress: fromAddress,
    ReplyToAddresses: [validatedData.replyTo],
  };

  const command = new SendEmailCommand(params);
  return client.send(command);
}

export default sendMail;
