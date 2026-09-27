import Link from "next/link";

export function LandingNav() {
  return (
    <nav className="landing-nav" aria-label="Navegação principal">
      <Link className="landing-brand" href="/" aria-label="Tarefa, início">
        <span className="brand-symbol"><i className="bi bi-check2" aria-hidden="true" /></span>
        tarefa<span>.</span>
      </Link>
      <div className="landing-nav-actions">
        <Link className="landing-login" href="/login">Entrar</Link>
        <Link className="landing-nav-cta" href="/signup">Começar agora <i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
      </div>
    </nav>
  );
}
