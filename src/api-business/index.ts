import express from "express";
import debug from "debug";
import "dotenv/config";
import router from "./app/routers/router";

import type { Request, Response, NextFunction } from "express";

const log = debug("app:api-buisness");

log("creating server");
const app = express();

app.use(express.json());
app.use((req: Request, _: Response, next: NextFunction) => {
  log(`${req.method} ${req.url}`);
  next();
});
app.use("/api/business", router);

app.listen(3000, () => {
  log("🚀 api-business ready on port 3000");
});
