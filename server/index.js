import { createApp } from "./app.js";

const port = Number(process.env.BFF_PORT ?? 9000);
const app = createApp();

app.listen(port, () => console.log(`Task manager BFF running at http://localhost:${port}`));