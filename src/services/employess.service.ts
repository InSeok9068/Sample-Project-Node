import { pipe } from "fp-ts/function";
import * as TE from "fp-ts/TaskEither";
import * as E from "fp-ts/Either";
import * as db from "../models";
import { DefaultError } from "../helpers/error";

// type Employess = {
//   fullName: string;
// };

const getEmployess = async (id: number) => {
  console.log(id);
  return pipe(
    TE.tryCatch(() => db.getEmployeeDB(id), E.toError),
    TE.map((user) => user),
    TE.mapLeft(getError),
  );
};

// type GetUserResponseInput = {
//   user: db.DBUser
//   token: string
// }

// type UserResponse = {
//   user: UserOutput
// }

// type GetUserResponse = (input: GetUserResponseInput) => UserResponse

// const getEmployessResponse: Employess = (user) => ({});

const getError = <E extends Error>(error: E) => {
  const COMMON_ERROR_CODE = 400;

  return {
    code: error instanceof DefaultError ? error.code : COMMON_ERROR_CODE,
    error: {
      errors: {
        body: error.message.split(":::"),
      },
    },
  };
};

export { getEmployess };
