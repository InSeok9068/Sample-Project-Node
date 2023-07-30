import express, { Express, Request, Response } from "express";
import { employeeRoute } from "./routes";
import cors from "cors";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(employeeRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Functional Programing + Express Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
