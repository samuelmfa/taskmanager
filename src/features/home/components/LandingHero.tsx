import Link from "next/link";

const previewTasks = [
  { label: "Rascunhar o plano da semana", tag: "PESSOAL", done: true },
  { label: "Preparar ideias para o time", tag: "COMPARTILHADA", done: false },
  { label: "Fazer espaço para o que importa", tag: "PESSOAL", done: false },
];

function TaskPreview() {
  return (
    <div className="task-preview">
      <div className="preview-topline"><div className="preview-brand"><span className="brand-symbol"><i className="bi bi-check2" aria-hidden="true" /></span><span>Meu espaço</span></div><button type="button" aria-label="Mais opções"><i className="bi bi-three-dots" /></button></div>
      <div className="preview-date">QUARTA-FEIRA, 24 DE SETEMBRO</div>
      <h2>Um passo de cada vez.</h2>
      <p className="preview-subtitle">3 coisas no seu radar hoje</p>
      <ul>{previewTasks.map((task) => <li key={task.label} className={task.done ? "preview-done" : ""}><span className="preview-check">{task.done && <i className="bi bi-check-lg" aria-hidden="true" />}</span><span className="preview-task-copy">{task.label}<small>{task.tag}</small></span><i className={`bi ${task.tag === "COMPARTILHADA" ? "bi-globe2" : "bi-lock"} preview-lock`} aria-hidden="true" /></li>)}</ul>
      <div className="preview-bottom"><span><i className="bi bi-plus-lg" aria-hidden="true" /> Adicionar tarefa</span><span>01 / 03</span></div>
    </div>
  );
}

function LandingVisual() {
  return (
    <div className="landing-visual" aria-label="Prévia do gerenciador de tarefas">
      <div className="visual-photo" role="img" aria-label="Mesa de trabalho iluminada por luz natural" />
      <TaskPreview />
      <div className="visual-note"><span><i className="bi bi-globe2" aria-hidden="true" /></span><p>Você decide<br /><strong>o que é público.</strong></p></div>
      <span className="visual-index">01 — ORGANIZE</span>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="landing-hero">
      <div className="landing-copy">
        <span className="landing-kicker"><span /> ESPAÇO PARA FAZER ACONTECER</span>
        <h1>Suas ideias merecem sair da lista.</h1>
        <p>Um lugar leve para organizar tarefas, acompanhar o que importa e compartilhar planos com quem faz parte deles.</p>
        <div className="landing-actions">
          <Link className="landing-primary" href="/signup">Organizar minhas tarefas <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          <span>Grátis para começar <i className="bi bi-dot" aria-hidden="true" /> Entre com Google</span>
        </div>
        <div className="landing-proof"><div className="proof-avatars"><span>MA</span><span>JL</span><span>RC</span></div><p><strong>Menos ruído, mais progresso.</strong><br />Seus projetos, no seu ritmo.</p></div>
      </div>
      <LandingVisual />
    </section>
  );
}
