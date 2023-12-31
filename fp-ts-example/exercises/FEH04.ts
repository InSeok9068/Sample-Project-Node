/**
 * Definire una istanza di `Semigroup` per `Either` che accumula gli errori
 */
import { Semigroup } from "fp-ts/Semigroup";
import * as S from "fp-ts/string";
import * as N from "fp-ts/number";
import { Either, right, left } from "fp-ts/Either";

declare const getSemigroup: <E, A>(SE: Semigroup<E>, SA: Semigroup<A>) => Semigroup<Either<E, A>>;

// ------------------------------------
// tests
// ------------------------------------

import * as assert from "assert";

const SE = getSemigroup(N.SemigroupSum, S.Semigroup);

assert.deepStrictEqual(SE.concat(left(1), left(2)), left(3));
assert.deepStrictEqual(SE.concat(right("a"), left(2)), left(2));
assert.deepStrictEqual(SE.concat(left(1), right("b")), left(1));
assert.deepStrictEqual(SE.concat(right("a"), right("b")), right("ab"));
