import { Request, Response, Router } from "express";
import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import { getEmployess } from "../services";

const employeeRoute = Router();

employeeRoute.get("/employess", async (req: Request, res: Response) => {
  const id = Number(req.query.id);

  return pipe(
    getEmployess(id),
    TE.map((result) => res.json(result)),
    TE.mapLeft((result) => res.status(result.code).json(result.error)),
  )();
});

export { employeeRoute };
