import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404</p>
      <h1>This page does not exist.</h1>
      <Link className="text-link" href="/">Return home →</Link>
    </section>
  );
}
