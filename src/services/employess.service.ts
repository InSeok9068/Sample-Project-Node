import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import * as E from "fp-ts/Either";
import * as db from "../models";
import { errorUtil } from "../utils";

const getEmployess = (id: number) => {
  return pipe(
    TE.tryCatch(() => db.getEmployeeDB(id), E.toError),
    TE.map((employee) => employee),
    TE.mapLeft(errorUtil.getError),
  );
};

export { getEmployess };
