import { Router } from "express";

const tasksRouter = Router();
let tasks = [
  {
    id: "task-1",
    title: "Planejar a semana",
    description: "",
    completed: false,
    visibility: "private",
  },
  {
    id: "task-2",
    title: "Compartilhar o primeiro projeto",
    description: "",
    completed: true,
    visibility: "public",
  },
];

tasksRouter.get("/", (_request, response) => response.json({ tasks }));
tasksRouter.get("/public", (_request, response) => {
  response.json({
    tasks: tasks.filter((task) => task.visibility === "public"),
  });
});

tasksRouter.post("/", (request, response) => {
  const title =
    typeof request.body?.title === "string" ? request.body.title.trim() : "";
  if (!title)
    return response.status(400).json({ error: "Task title is required." });

  const task = {
    id: `task-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    title,
    description: "",
    completed: false,
    visibility: request.body.visibility === "public" ? "public" : "private",
  };
  tasks = [task, ...tasks];
  return response.status(201).json({ task });
});

tasksRouter.put("/:id", (request, response) => {
  const taskIndex = tasks.findIndex((task) => task.id === request.params.id);
  if (taskIndex < 0)
    return response.status(404).json({ error: "Task not found." });

  const current = tasks[taskIndex];
  const task = {
    ...current,
    ...(typeof request.body?.title === "string"
      ? { title: request.body.title.trim() }
      : {}),
    ...(typeof request.body?.completed === "boolean"
      ? { completed: request.body.completed }
      : {}),
    ...(request.body?.visibility === "public" ||
    request.body?.visibility === "private"
      ? { visibility: request.body.visibility }
      : {}),
  };
  tasks[taskIndex] = task;
  return response.json({ task });
});

tasksRouter.delete("/:id", (request, response) => {
  const existingCount = tasks.length;
  tasks = tasks.filter((task) => task.id !== request.params.id);
  if (tasks.length === existingCount)
    return response.status(404).json({ error: "Task not found." });
  return response.status(204).end();
});

export default tasksRouter;
