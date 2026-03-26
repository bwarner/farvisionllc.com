import { describe, it, expect, beforeEach } from "vitest";
import { checkRateLimit, resetRateLimit, MAX_REQUESTS } from "@/app/lib/rate-limit";

describe("Rate Limiter", () => {
  const testKey = "test@example.com";

  beforeEach(() => {
    resetRateLimit(testKey);
  });

  it("allows the first request", () => {
    const result = checkRateLimit(testKey);
    expect(result.allowed).toBe(true);
    expect(result.retryAfterMs).toBe(0);
  });

  it("allows requests up to the max limit", () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      const result = checkRateLimit(testKey);
      expect(result.allowed).toBe(true);
    }
  });

  it("blocks requests after exceeding the max limit", () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      checkRateLimit(testKey);
    }
    const result = checkRateLimit(testKey);
    expect(result.allowed).toBe(false);
    expect(result.retryAfterMs).toBeGreaterThan(0);
  });

  it("tracks different keys independently", () => {
    const otherKey = "other@example.com";
    resetRateLimit(otherKey);

    // Exhaust the limit for testKey
    for (let i = 0; i < MAX_REQUESTS; i++) {
      checkRateLimit(testKey);
    }

    // otherKey should still be allowed
    const result = checkRateLimit(otherKey);
    expect(result.allowed).toBe(true);

    resetRateLimit(otherKey);
  });

  it("resets rate limit for a key", () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      checkRateLimit(testKey);
    }
    expect(checkRateLimit(testKey).allowed).toBe(false);

    resetRateLimit(testKey);
    expect(checkRateLimit(testKey).allowed).toBe(true);
  });
});
