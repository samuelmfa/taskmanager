import { Router } from "express";
import healthResponse from "../mocks/responses/health.response.js";

const healthRouter = Router();

healthRouter.get("/", (_request, response) => response.json(healthResponse));

export default healthRouter;