"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TasksEndpoint } from "@/features/tasks/api/tasksEndpoints";
import type { PublicTask } from "@/features/tasks/domain/Task";
import { BffConnectionFactory } from "@/shared/infrastructure/bff/BffConnectionFactory";

const bff = BffConnectionFactory.create();

export default function PublicTasksPage() {
  const [tasks, setTasks] = useState<PublicTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    bff
      .get<{ tasks: PublicTask[] }>(TasksEndpoint.PublicTasks)
      .then((response) => setTasks(response.tasks))
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="public-tasks-page">
      <nav className="landing-nav">
        <Link className="landing-brand" href="/">
          <span className="brand-symbol">
            <i className="bi bi-check2" aria-hidden="true" />
          </span>
          tarefa<span>.</span>
        </Link>
        <Link className="landing-nav-cta" href="/signup">
          Criar meu espaço{" "}
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </nav>
      <section className="public-tasks-content">
        <p className="landing-kicker">
          <span /> FEITO PARA CONSTRUIR JUNTO
        </p>
        <h1>Ideias compartilhadas, progresso coletivo.</h1>
        <p>
          As tarefas que as pessoas escolheram tornar públicas aparecem aqui.
        </p>
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
      </section>
    </main>
  );
}
