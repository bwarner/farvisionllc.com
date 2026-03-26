import { describe, it, expect, vi, beforeEach } from "vitest";
import { resetRateLimit } from "@/app/lib/rate-limit";

// Mock sendMail before importing the action
vi.mock("@/app/lib/mail", () => ({
  default: vi.fn().mockResolvedValue({ MessageId: "test-123" }),
}));

// Must import after mocking
const { sendContact } = await import("@/app/actions/contact");

const validState = {
  name: "Test User",
  email: "test@example.com",
  message: "This is a test message with enough characters",
  success: null,
  error: null,
};

describe("sendContact", () => {
  beforeEach(() => {
    resetRateLimit("test@example.com");
    vi.clearAllMocks();
  });

  it("sends a valid contact form successfully", async () => {
    const result = await sendContact(validState);
    expect(result.success).toBe(true);
    expect(result.error).toBeNull();
  });

  it("returns validation errors for empty name", async () => {
    const result = await sendContact({ ...validState, name: "" });
    expect(result.success).toBe(false);
    expect(result.errors?.fieldErrors?.name).toBeDefined();
    expect(result.errors!.fieldErrors!.name!.length).toBeGreaterThan(0);
  });

  it("returns validation errors for invalid email", async () => {
    const result = await sendContact({ ...validState, email: "not-an-email" });
    expect(result.success).toBe(false);
    expect(result.errors?.fieldErrors?.email).toBeDefined();
    expect(result.errors!.fieldErrors!.email!.length).toBeGreaterThan(0);
  });

  it("returns validation errors for short message", async () => {
    const result = await sendContact({ ...validState, message: "hi" });
    expect(result.success).toBe(false);
    expect(result.errors?.fieldErrors?.message).toBeDefined();
    expect(result.errors!.fieldErrors!.message!.length).toBeGreaterThan(0);
  });

  it("returns validation errors for short name", async () => {
    const result = await sendContact({ ...validState, name: "AB" });
    expect(result.success).toBe(false);
    expect(result.errors?.fieldErrors?.name).toBeDefined();
  });

  it("rate limits after too many submissions", async () => {
    // Send 3 valid requests (the limit)
    await sendContact(validState);
    await sendContact(validState);
    await sendContact(validState);

    // 4th should be rate limited
    const result = await sendContact(validState);
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Too many submissions/);
  });

  it("silently succeeds when company is filled (bot detection)", async () => {
    const { default: sendMail } = await import("@/app/lib/mail");
    const result = await sendContact({
      ...validState,
      company: "I am a bot",
    });

    // Should appear successful to the bot
    expect(result.success).toBe(true);
    // But should NOT have actually sent an email
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("strips newlines from name to prevent header injection", async () => {
    const { default: sendMail } = await import("@/app/lib/mail");

    await sendContact({
      ...validState,
      name: "Evil\r\nBcc: victim@example.com",
    });

    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: expect.not.stringContaining("\r\n"),
      })
    );
  });
});
