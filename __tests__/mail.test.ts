import { describe, it, expect } from "vitest";
import z from "zod";
import sanitizeHtml from "sanitize-html";

// Test the sanitization logic directly since we can't easily
// test the full SES integration without AWS credentials

describe("Email sanitization", () => {
  const SubjectSchema = z
    .string()
    .nonempty()
    .trim()
    .transform((str) => str.replace(/[<>\r\n]/g, ""));

  const BodySchema = z
    .string()
    .nonempty()
    .transform((str) =>
      sanitizeHtml(str, { allowedTags: [], allowedAttributes: {} })
    );

  it("strips angle brackets from subject", () => {
    const result = SubjectSchema.parse("Hello <script>alert('xss')</script>");
    expect(result).toBe("Hello scriptalert('xss')/script");
    expect(result).not.toContain("<");
    expect(result).not.toContain(">");
  });

  it("strips newlines from subject (header injection prevention)", () => {
    const result = SubjectSchema.parse("Subject\r\nBcc: victim@example.com");
    expect(result).toBe("SubjectBcc: victim@example.com");
    expect(result).not.toContain("\r");
    expect(result).not.toContain("\n");
  });

  it("strips all HTML from body", () => {
    const result = BodySchema.parse(
      '<script>alert("xss")</script><p>Hello <b>world</b></p>'
    );
    expect(result).not.toContain("<script>");
    expect(result).not.toContain("<p>");
    expect(result).not.toContain("<b>");
    expect(result).toContain("Hello");
    expect(result).toContain("world");
  });

  it("handles plain text body without modification", () => {
    const result = BodySchema.parse("Just a normal message");
    expect(result).toBe("Just a normal message");
  });

  it("strips event handlers from body", () => {
    const result = BodySchema.parse(
      '<img src="x" onerror="alert(1)">Click me'
    );
    expect(result).not.toContain("onerror");
    expect(result).toContain("Click me");
  });

  it("rejects empty subject", () => {
    expect(() => SubjectSchema.parse("")).toThrow();
  });

  it("rejects empty body", () => {
    expect(() => BodySchema.parse("")).toThrow();
  });
});
