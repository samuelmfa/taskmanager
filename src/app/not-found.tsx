import Link from "next/link";

export default function NotFound() {
  return (
    <main className="public-tasks-page">
      <nav className="landing-nav">
        <Link className="landing-brand" href="/">
          <span className="brand-symbol">
            <i className="bi bi-check2" aria-hidden="true" />
          </span>
          tarefa<span>.</span>
        </Link>
        <Link className="landing-nav-cta" href="/tasks">
          Minhas tarefas <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </nav>
      <section className="public-tasks-content">
        <p className="landing-kicker">
          <span /> PÁGINA NÃO ENCONTRADA
        </p>
        <h1>Este caminho ainda não existe.</h1>
        <p>Volte ao início ou siga para sua lista de tarefas.</p>
      </section>
    </main>
  );
}
