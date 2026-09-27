"use client";

import { useEffect, useState } from "react";
import { TasksEndpoint } from "@/features/tasks/api/tasksEndpoints";
import { PublicTasksFeed } from "@/features/tasks/components/PublicTasksFeed";
import { PublicTasksIntro } from "@/features/tasks/components/PublicTasksIntro";
import { PublicTasksNav } from "@/features/tasks/components/PublicTasksNav";
import type { PublicTask } from "@/features/tasks/domain/Task";
import { BffConnectionFactory } from "@/shared/infrastructure/bff/BffConnectionFactory";

const bff = BffConnectionFactory.create();

export default function PublicTasksPage({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
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
      <PublicTasksNav isAuthenticated={isAuthenticated} />
      <section className="public-tasks-content">
        <PublicTasksIntro />
        <PublicTasksFeed
          tasks={tasks}
          isLoading={isLoading}
          hasError={hasError}
        />
      </section>
    </main>
  );
}
