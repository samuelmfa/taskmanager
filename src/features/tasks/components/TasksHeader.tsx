interface TasksHeaderProps {
  openTaskCount: number;
}

export function TasksHeader({ openTaskCount }: TasksHeaderProps) {
  return (
    <header className="tasks-heading">
      <div>
        <p className="eyebrow">SEU ESPAÇO DE TRABALHO</p>
        <h1>Menos abas abertas. Mais coisas feitas.</h1>
        <p className="subtitle">
          Organize suas prioridades e escolha o que compartilhar.
        </p>
      </div>
      <span className="task-count">{openTaskCount} em aberto</span>
    </header>
  );
}
