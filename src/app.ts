import express, { Express, Request, Response } from "express";
import { employeeRoute } from "./routes";
import { logger, morganMiddleware } from "./configs";
import cors from "cors";
import helmet from "helmet";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morganMiddleware);

app.use(employeeRoute);

app.get("/", (req: Request, res: Response) => {
  logger.info("App Start");
  res.send("Typescript + Node.js + Functional Programing + Express Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});
