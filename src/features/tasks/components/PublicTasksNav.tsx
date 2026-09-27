import Link from "next/link";

export function PublicTasksNav({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <nav className="landing-nav" aria-label="Navegação do mural público">
      <Link className="landing-brand" href="/" aria-label="Tarefa, início">
        <span className="brand-symbol">
          <i className="bi bi-check2" aria-hidden="true" />
        </span>
        tarefa<span>.</span>
      </Link>
      <div className="landing-nav-actions">
        {isAuthenticated && (
          <Link className="landing-login" href="/tasks">
            Voltar ao dashboard
          </Link>
        )}
        <Link className="landing-nav-cta" href="/signup">
          Criar meu espaço{" "}
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
