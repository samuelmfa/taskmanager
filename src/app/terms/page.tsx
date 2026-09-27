import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link className="landing-brand" href="/">
        tarefa<span>.</span>
      </Link>
      <h1>Termos de uso</h1>
      <p>
        Use o tarefa. para organizar suas próprias atividades e compartilhar
        apenas o conteúdo que você tem autorização para publicar. Você mantém a
        responsabilidade pelas tarefas e informações que adicionar.
      </p>
      <p>
        Este projeto está em desenvolvimento. As funcionalidades e a
        disponibilidade podem mudar enquanto evoluímos o produto.
      </p>
    </main>
  );
}
