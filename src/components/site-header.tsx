import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Anastasia Galkova, home">
        AG
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <a href="/anastasia-galkova-resume.pdf">Résumé</a>
      </nav>
    </header>
  );
}
