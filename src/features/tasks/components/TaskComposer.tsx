import type { FormEvent } from "react";
import type { Task } from "@/features/tasks/domain/Task";

interface TaskComposerProps {
  title: string;
  visibility: Task["visibility"];
  onTitleChange: (title: string) => void;
  onVisibilityChange: (visibility: Task["visibility"]) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function TaskComposer({
  title,
  visibility,
  onTitleChange,
  onVisibilityChange,
  onSubmit,
}: TaskComposerProps) {
  return (
    <form className="task-composer" onSubmit={onSubmit}>
      <label className="visually-hidden" htmlFor="new-task">
        Nome da tarefa
      </label>
      <input
        id="new-task"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        placeholder="Qual é a próxima coisa?"
        required
      />
      <label className="visibility-select" htmlFor="task-visibility">
        <i
          className={`bi ${visibility === "private" ? "bi-lock" : "bi-globe2"}`}
          aria-hidden="true"
        />
        <select
          id="task-visibility"
          value={visibility}
          onChange={(event) =>
            onVisibilityChange(event.target.value as Task["visibility"])
          }
        >
          <option value="private">Privada</option>
          <option value="public">Pública</option>
        </select>
      </label>
      <button className="new-session" type="submit">
        <i className="bi bi-plus-lg" aria-hidden="true" /> Adicionar tarefa
      </button>
    </form>
  );
}
