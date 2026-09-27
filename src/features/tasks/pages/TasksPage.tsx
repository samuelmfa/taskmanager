"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/shared/components/AppShell";
import { PageWrap } from "@/shared/components/PageWrap";
import { BffConnectionFactory } from "@/shared/infrastructure/bff/BffConnectionFactory";
import { TasksEndpoint } from "@/features/tasks/api/tasksEndpoints";
import { filterTasks, type Task, type TaskStatusFilter } from "@/features/tasks/domain/Task";

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
      const response = await bff.post<{ task: Task }, { title: string; visibility: Task["visibility"] }>(
        TasksEndpoint.Tasks,
        { title: title.trim(), visibility },
      );
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
      setTasks((current) => current.map((item) => item.id === task.id ? response.task : item));
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
        <header className="tasks-heading">
          <div>
            <p className="eyebrow">SEU ESPAÇO DE TRABALHO</p>
            <h1>Menos abas abertas. Mais coisas feitas.</h1>
            <p className="subtitle">Organize suas prioridades e escolha o que compartilhar.</p>
          </div>
          <span className="task-count">{tasks.filter((task) => !task.completed).length} em aberto</span>
        </header>

        <form className="task-composer" onSubmit={addTask}>
          <label className="visually-hidden" htmlFor="new-task">Nome da tarefa</label>
          <input id="new-task" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Qual é a próxima coisa?" required />
          <label className="visibility-select" htmlFor="task-visibility">
            <i className={`bi ${visibility === "private" ? "bi-lock" : "bi-globe2"}`} aria-hidden="true" />
            <select id="task-visibility" value={visibility} onChange={(event) => setVisibility(event.target.value as Task["visibility"])}>
              <option value="private">Privada</option>
              <option value="public">Pública</option>
            </select>
          </label>
          <button className="new-session" type="submit"><i className="bi bi-plus-lg" aria-hidden="true" /> Adicionar tarefa</button>
        </form>

        {error && <div className="alert alert-warning" role="alert">{error} <button className="btn btn-sm btn-outline-dark ms-2" onClick={() => void loadTasks()}>Tentar novamente</button></div>}

        <section className="task-board" aria-label="Lista de tarefas">
          <div className="task-board-toolbar">
            <h2>Suas tarefas <span>{visibleTasks.length}</span></h2>
            <div className="task-filters" aria-label="Filtrar tarefas">
              {taskFilters.map((item) => (
                <button key={item.id} type="button" className={filter === item.id ? "selected" : ""} onClick={() => setFilter(item.id)}>{item.label}</button>
              ))}
            </div>
          </div>
          {visibleTasks.length ? <ul className="task-list">
            {visibleTasks.map((task) => <li className={`task-row ${task.completed ? "is-complete" : ""}`} key={task.id}>
              <button className="task-check" type="button" aria-label={task.completed ? "Marcar como em aberto" : "Concluir tarefa"} onClick={() => void updateTask(task, { completed: !task.completed })}>
                {task.completed && <i className="bi bi-check-lg" aria-hidden="true" />}
              </button>
              <span className="task-title">{task.title}</span>
              <button className={`task-visibility ${task.visibility}`} type="button" aria-label={`Tornar ${task.title} ${task.visibility === "private" ? "pública" : "privada"}`} onClick={() => void updateTask(task, { visibility: task.visibility === "private" ? "public" : "private" })}><i className={`bi ${task.visibility === "private" ? "bi-lock" : "bi-globe2"}`} aria-hidden="true" />{task.visibility === "private" ? "Privada" : "Pública"}</button>
              <button className="icon-button task-delete" type="button" aria-label={`Excluir ${task.title}`} onClick={() => void deleteTask(task)}><i className="bi bi-trash3" aria-hidden="true" /></button>
            </li>)}
          </ul> : <div className="task-empty"><i className="bi bi-check2-circle" aria-hidden="true" /><p>{tasks.length ? "Nada por aqui com esse filtro." : "Sua lista começa com uma tarefa."}</p></div>}
        </section>
      </PageWrap>
    </AppShell>
  );
}
