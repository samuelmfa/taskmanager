import type { Task } from "@/features/tasks/domain/Task";

interface TaskRowProps {
  task: Task;
  onToggle: (task: Task) => void;
  onChangeVisibility: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export function TaskRow({
  task,
  onToggle,
  onChangeVisibility,
  onDelete,
}: TaskRowProps) {
  return (
    <li className={`task-row ${task.completed ? "is-complete" : ""}`}>
      <button
        className="task-check"
        type="button"
        aria-label={task.completed ? "Marcar como em aberto" : "Concluir tarefa"}
        onClick={() => onToggle(task)}
      >
        {task.completed && <i className="bi bi-check-lg" aria-hidden="true" />}
      </button>
      <span className="task-title">{task.title}</span>
      <button
        className={`task-visibility ${task.visibility}`}
        type="button"
        aria-label={`Tornar ${task.title} ${task.visibility === "private" ? "pública" : "privada"}`}
        onClick={() => onChangeVisibility(task)}
      >
        <i
          className={`bi ${task.visibility === "private" ? "bi-lock" : "bi-globe2"}`}
          aria-hidden="true"
        />
        {task.visibility === "private" ? "Privada" : "Pública"}
      </button>
      <button
        className="icon-button task-delete"
        type="button"
        aria-label={`Excluir ${task.title}`}
        onClick={() => onDelete(task)}
      >
        <i className="bi bi-trash3" aria-hidden="true" />
      </button>
    </li>
  );
}
