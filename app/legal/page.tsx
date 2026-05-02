import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Terms of Service and Privacy Policy for Farvision LLC products: ScanSafeguard and MyAwesomeResume.",
  robots: { index: true, follow: true },
};

const products = [
  {
    name: "ScanSafeguard",
    description: "AI-powered security scanning.",
    termsUrl: "https://app.scansafeguard.com/terms-of-service",
    privacyUrl: "https://app.scansafeguard.com/privacy-policy",
  },
  {
    name: "MyAwesomeResume",
    description: "AI-powered resume management.",
    termsUrl: "https://myawesomeresume.com/terms",
    privacyUrl: "https://myawesomeresume.com/privacy",
  },
] as const;

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-gray-900 dark:bg-black dark:text-gray-100">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm uppercase tracking-wider text-gray-500">
          <Link href="/" className="hover:underline">
            Farvision LLC
          </Link>{" "}
          / Legal
        </p>
        <h1 className="mb-4 text-4xl font-semibold">Legal</h1>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
          Each Farvision LLC product has its own Terms of Service and Privacy
          Policy. Choose the product you use to view the applicable documents.
        </p>

        <ul className="space-y-8">
          {products.map((product) => (
            <li
              key={product.name}
              className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
            >
              <h2 className="mb-1 text-2xl font-semibold">{product.name}</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href={product.termsUrl}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service →
                </a>
                <a
                  href={product.privacyUrl}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy →
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-sm text-gray-500">
          Questions? Contact{" "}
          <a
            href="mailto:info@farvisionllc.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            info@farvisionllc.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
