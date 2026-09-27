"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/shared/components/AppShell";
import { PageWrap } from "@/shared/components/PageWrap";
import { BffConnectionFactory } from "@/shared/infrastructure/bff/BffConnectionFactory";
import { TasksEndpoint } from "@/features/tasks/api/tasksEndpoints";
import { TaskBoard } from "@/features/tasks/components/TaskBoard";
import { TaskComposer } from "@/features/tasks/components/TaskComposer";
import { TasksHeader } from "@/features/tasks/components/TasksHeader";
import {
  filterTasks,
  type Task,
  type TaskStatusFilter,
} from "@/features/tasks/domain/Task";

const taskFilters: { id: TaskStatusFilter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "open", label: "Em aberto" },
  { id: "done", label: "Concluídas" },
];

const bff = BffConnectionFactory.create();

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [visibility, setVisibility] = useState<Task["visibility"]>("private");
  const [filter, setFilter] = useState<TaskStatusFilter>("all");
  const [error, setError] = useState("");

  async function loadTasks() {
    try {
      const response = await bff.get<{ tasks: Task[] }>(TasksEndpoint.Tasks);
      setTasks(response.tasks);
      setError("");
    } catch {
      setError("Não foi possível conectar ao backmock na porta 9000.");
    }
  }

  useEffect(() => {
    void loadTasks();
  }, []);

  async function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim()) return;
    try {
      const response = await bff.post<
        { task: Task },
        { title: string; visibility: Task["visibility"] }
      >(TasksEndpoint.Tasks, { title: title.trim(), visibility });
      setTasks((current) => [response.task, ...current]);
      setTitle("");
    } catch {
      setError("Não foi possível salvar a tarefa. Tente novamente.");
    }
  }

  async function updateTask(task: Task, changes: Partial<Task>) {
    try {
      const response = await bff.put<{ task: Task }, Partial<Task>>(
        `${TasksEndpoint.Tasks}/${task.id}`,
        changes,
      );
      setTasks((current) =>
        current.map((item) => (item.id === task.id ? response.task : item)),
      );
    } catch {
      setError("Não foi possível atualizar a tarefa.");
    }
  }

  async function deleteTask(task: Task) {
    try {
      await bff.delete(`${TasksEndpoint.Tasks}/${task.id}`);
      setTasks((current) => current.filter((item) => item.id !== task.id));
    } catch {
      setError("Não foi possível remover a tarefa.");
    }
  }

  const visibleTasks = filterTasks(tasks, filter);

  return (
    <AppShell>
      <PageWrap id="tasks">
        <TasksHeader openTaskCount={tasks.filter((task) => !task.completed).length} />
        <TaskComposer
          title={title}
          visibility={visibility}
          onTitleChange={setTitle}
          onVisibilityChange={setVisibility}
          onSubmit={addTask}
        />

        {error && (
          <div className="alert alert-warning" role="alert">
            {error}{" "}
            <button
              className="btn btn-sm btn-outline-dark ms-2"
              onClick={() => void loadTasks()}
            >
              Tentar novamente
            </button>
          </div>
        )}

        <TaskBoard
          tasks={visibleTasks}
          hasTasks={tasks.length > 0}
          filter={filter}
          filters={taskFilters}
          onFilterChange={setFilter}
          onToggle={(task) => void updateTask(task, { completed: !task.completed })}
          onChangeVisibility={(task) =>
            void updateTask(task, {
              visibility: task.visibility === "private" ? "public" : "private",
            })
          }
          onDelete={(task) => void deleteTask(task)}
        />
      </PageWrap>
    </AppShell>
  );
}
