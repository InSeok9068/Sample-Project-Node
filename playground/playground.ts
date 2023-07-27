const list: number[] = [1, 2, 3, 4];
console.log(list);
console.log(list.map((val) => val.toString()));
console.log(list.filter((val) => val == 1));
console.log(list.reduce((val1, val2) => val1 + val2));

const nullVal: string | null = null;
const notNullVal: string | null = "값";
console.log(nullVal ?? "널이다");
console.log(notNullVal ?? "널이다");
console.log(notNullVal && "값이 있다");

interface DataClass {
  val1: string;
  val2?: string;
}

const data: DataClass = {
  val1: "1",
};

console.log(data?.val1);
console.log(data.val2);

type BFunction = () => void;
const bfunction: BFunction = () => console.log("테스트");

type AFunction = (fun: BFunction) => void;
const afunction: AFunction = (fun: BFunction) => fun();

afunction(bfunction);

import { Magma } from "fp-ts/Magma";

const MagmaSub: Magma<number> = {
  concat: (first, second) => first - second,
};

// helper
const getPipeableConcat =
  <A>(M: Magma<A>) =>
  (second: A) =>
  (first: A): A =>
    M.concat(first, second);

const concat = getPipeableConcat(MagmaSub);

// 사용 예시

import { pipe } from "fp-ts/function";

pipe(10, concat(2), concat(3), concat(1), concat(2), console.log);
// => 2
