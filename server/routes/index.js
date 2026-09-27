import { Router } from "express";
import healthRouter from "./health.routes.js";
import tasksRouter from "./tasks.routes.js";

const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/tasks", tasksRouter);


export default apiRouter;