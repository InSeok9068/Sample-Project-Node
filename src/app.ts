import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { employeeRoute } from "./routes";
import { logger, morganMiddleware } from "./configs";

const app: Express = express();
const port = process.env.PORT || 3000;

// 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morganMiddleware);

// EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Route
app.use(employeeRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Functional Programing + Express Server");
});

app.get("/home", (req: Request, res: Response) => {
  res.render("home");
});

app.listen(port, () => {
  logger.info("App Start");
  console.log(`[server]: Server is running at <http://localhost:${port}>`);
});
