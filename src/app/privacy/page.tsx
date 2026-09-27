import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="landing-brand" href="/">
        tarefa<span>.</span>
      </Link>
      <h1>Privacidade</h1>
      <p>
        O acesso usa sua conta Google para confirmar sua identidade. Em
        produção, mantemos uma sessão segura em cookie protegido; tarefas são
        privadas por padrão e só aparecem no mural quando você escolhe torná-las
        públicas.
      </p>
      <p>
        Esta versão de estudo usa dados mock em memória no backmock local.
        Configure armazenamento persistente e política de retenção antes de
        disponibilizar dados reais.
      </p>
    </main>
  );
}
