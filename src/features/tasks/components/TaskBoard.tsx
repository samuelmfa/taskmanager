import type { Task, TaskStatusFilter } from "@/features/tasks/domain/Task";
import { TaskRow } from "@/features/tasks/components/TaskRow";

interface TaskBoardProps {
  tasks: Task[];
  hasTasks: boolean;
  filter: TaskStatusFilter;
  filters: { id: TaskStatusFilter; label: string }[];
  onFilterChange: (filter: TaskStatusFilter) => void;
  onToggle: (task: Task) => void;
  onChangeVisibility: (task: Task) => void;
  onDelete: (task: Task) => void;
}

export function TaskBoard({
  tasks,
  hasTasks,
  filter,
  filters,
  onFilterChange,
  onToggle,
  onChangeVisibility,
  onDelete,
}: TaskBoardProps) {
  return (
    <section className="task-board" aria-label="Lista de tarefas">
      <div className="task-board-toolbar">
        <h2>Suas tarefas <span>{tasks.length}</span></h2>
        <div className="task-filters" aria-label="Filtrar tarefas">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? "selected" : ""}
              onClick={() => onFilterChange(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {tasks.length ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onToggle={onToggle}
              onChangeVisibility={onChangeVisibility}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <div className="task-empty">
          <i className="bi bi-check2-circle" aria-hidden="true" />
          <p>
            {hasTasks
              ? "Nada por aqui com esse filtro."
              : "Sua lista começa com uma tarefa."}
          </p>
        </div>
      )}
    </section>
  );
}
