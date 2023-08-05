// const aFunction = (a: string, b: string) => {
//   return {
//     a,
//     b,
//   };
// };

const aFunction = (a: string, b: string) => ({
  a,
  b,
});

console.log(aFunction("안녕", "하세요"));
