import Link from "next/link";
import Footer from "@/components/footer";
import { PropsWithChildren } from "react";

const GenericLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header id="header">
        <Link href="/" className="title">
          Farvision LLC
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/custom">Custom</Link>
            </li>
            <li>
              <Link href="/integration">Integration</Link>
            </li>
            <li>
              <Link href="/secure">Secure</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <Footer />
    </>
  );
};

export default GenericLayout;
