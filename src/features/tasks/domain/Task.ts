export type TaskVisibility = "public" | "private";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  visibility: TaskVisibility;
}

export type PublicTask = Pick<Task, "id" | "title" | "completed">;
export type TaskStatusFilter = "all" | "open" | "done";

export function filterTasks(tasks: Task[], filter: TaskStatusFilter): Task[] {
  return tasks.filter(
    (task) =>
      filter === "all" ||
      (filter === "open" ? !task.completed : task.completed),
  );
}
