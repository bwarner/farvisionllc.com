import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, it, expect } from "vitest";
import {
  COMPANY,
  PLACEHOLDER_PREFIX,
  POLICY_STATUS,
  PRODUCTS,
  productList,
} from "@/app/lib/legal";

const root = join(__dirname, "..");

const LEGAL_SOURCES = [
  "app/lib/legal.ts",
  "app/terms/page.tsx",
  "app/privacy/page.tsx",
  "app/refunds/page.tsx",
  "app/legal/page.tsx",
];

const read = (relativePath: string) =>
  readFileSync(join(root, relativePath), "utf8");

/** Source text with line wrapping collapsed, so assertions about prose are not
 *  sensitive to where the formatter happened to break a line. */
const readProse = (relativePath: string) =>
  read(relativePath).replace(/\s+/g, " ");

describe("legal pages", () => {
  it("keeps the product list in one place", () => {
    // Product names belong in legal.ts, not hardcoded into page copy — the
    // exceptions are clauses that genuinely apply to one product only, where
    // naming it is the point.
    const namedInProductSpecificClauses = new Set([
      "ScanSafeguard", // /terms#authorized-testing
      "SellAvant", // /terms#third-party — Amazon SP-API connection
    ]);

    expect(PRODUCTS.length).toBeGreaterThan(0);
    for (const source of ["app/terms/page.tsx", "app/privacy/page.tsx"]) {
      const contents = read(source);
      for (const product of PRODUCTS) {
        if (namedInProductSpecificClauses.has(product.name)) continue;
        expect(contents).not.toContain(product.name);
      }
    }
  });

  it("formats the product list with an Oxford comma", () => {
    expect(productList()).toBe(
      "SellAvant, ScanSafeguard, and MyAwesomeResume",
    );
  });

  it("names Farvision LLC as the merchant of record on the refund page", () => {
    expect(readProse("app/refunds/page.tsx")).toContain("merchant of record");
    expect(COMPANY.statementDescriptor).toBe("FARVISION LLC");
  });

  it("blocks publishing while legal placeholders remain", () => {
    const outstanding = LEGAL_SOURCES.flatMap((source) =>
      read(source)
        .split("\n")
        .map((line, index) => ({ source, line: index + 1, text: line.trim() }))
        .filter((entry) => entry.text.includes(PLACEHOLDER_PREFIX)),
    );

    if (POLICY_STATUS === "published") {
      expect(
        outstanding,
        `Set POLICY_STATUS back to "draft" or resolve these placeholders:\n${outstanding
          .map((entry) => `  ${entry.source}:${entry.line}`)
          .join("\n")}`,
      ).toEqual([]);
    } else {
      // Still in draft: placeholders are expected. This branch exists so the
      // count is visible in test output rather than silently forgotten.
      expect(outstanding.length).toBeGreaterThan(0);
    }
  });
});
