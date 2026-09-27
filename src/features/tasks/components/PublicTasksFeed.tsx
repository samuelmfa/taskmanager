import type { PublicTask } from "@/features/tasks/domain/Task";

interface PublicTasksFeedProps {
  tasks: PublicTask[];
  isLoading: boolean;
  hasError: boolean;
}

export function PublicTasksFeed({
  tasks,
  isLoading,
  hasError,
}: PublicTasksFeedProps) {
  return (
    <>
      {isLoading ? (
        <p className="public-feed-state">
          Carregando tarefas compartilhadas...
        </p>
      ) : null}
      {hasError ? (
        <p className="public-feed-state" role="alert">
          Não foi possível carregar o mural. Confira se o backmock está
          rodando.
        </p>
      ) : null}
      {!isLoading && !hasError && tasks.length === 0 ? (
        <div className="public-empty">
          <i className="bi bi-globe2" aria-hidden="true" />
          <strong>O mural está começando.</strong>
          <span>Volte em breve para descobrir novos projetos.</span>
        </div>
      ) : null}
      {tasks.length > 0 ? (
        <ul className="public-task-items">
          {tasks.map((task) => (
            <li key={task.id}>
              <i
                className={`bi ${task.completed ? "bi-check-circle-fill" : "bi-circle"}`}
                aria-hidden="true"
              />
              <span className={task.completed ? "done" : ""}>
                {task.title}
              </span>
              <small>COMPARTILHADA</small>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
