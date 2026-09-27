import Link from "next/link";

type GoogleAuthPageProps = { mode: "login" | "signup" };

export function GoogleAuthPage({ mode }: GoogleAuthPageProps) {
  const isSignup = mode === "signup";
  return (
    <main className="auth-page">
      <Link className="landing-brand auth-brand" href="/">
        <span className="brand-symbol">
          <i className="bi bi-check2" aria-hidden="true" />
        </span>
        tarefa<span>.</span>
      </Link>
      <section className="auth-panel">
        <div className="auth-mark">
          <i className="bi bi-check2" aria-hidden="true" />
        </div>
        <p className="landing-kicker">SEU ESPAÇO COMEÇA AQUI</p>
        <h1>
          {isSignup ? "Dê forma às suas ideias." : "Bom ter você de volta."}
        </h1>
        <p className="auth-description">
          {isSignup
            ? "Crie sua conta e encontre um jeito mais leve de organizar o dia."
            : "Entre para continuar de onde você parou."}
        </p>
        <a className="google-auth-button" href="/api/auth/google">
          <svg viewBox="0 0 48 48" aria-hidden="true">
            <path
              fill="#FFC107"
              d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
            />
            <path
              fill="#34A853"
              d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20.4 20.4 0 0 0 24 44Z"
            />
            <path
              fill="#4A90E2"
              d="M12.6 27.7a12.2 12.2 0 0 1 0-7.4V15H5.8a20.4 20.4 0 0 0 0 18l6.8-5.3Z"
            />
            <path
              fill="#EA4335"
              d="M24 11.9c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 5.7 29.5 4 24 4A20.4 20.4 0 0 0 5.8 15l6.8 5.3c1.6-4.8 6.1-8.4 11.4-8.4Z"
            />
          </svg>
          Continuar com Google
        </a>
        <p className="auth-terms">
          Ao continuar, você concorda com nossos{" "}
          <Link href="/terms">termos de uso</Link> e{" "}
          <Link href="/privacy">política de privacidade</Link>.
        </p>
        <div className="auth-switch">
          {isSignup ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
          <Link href={isSignup ? "/login" : "/signup"}>
            {isSignup ? "Entrar" : "Criar conta"}
          </Link>
        </div>
      </section>
      <p className="auth-local-note">
        {process.env.NODE_ENV === "development"
          ? "Modo local de desenvolvimento ativo"
          : "Acesso protegido com Google"}
      </p>
    </main>
  );
}
