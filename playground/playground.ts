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
