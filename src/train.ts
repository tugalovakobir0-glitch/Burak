//MitTask-P:
function string(obj: any) {
  const result = Object.entries(obj);
  return result;
}

console.log(string({ a: 10, b: 30, c: 40 }));

// //MITASK-O:
// function yigindi(qiymat: any[]) {
//   let qushulivchi = 0;
//   for (let i = 0; qiymat.length > i; i++) {
//     if (typeof qiymat[i] === "number") qushulivchi += qiymat[i];
//   }
//   return qushulivchi;
// }

// console.log(yigindi([2, 5, 6, "6", { a: 10 }, true]));

/** Project Standarts:
 - Login Standarts:
 - Naming Standarts:
 function, method, variable > CAMEL case
 class > PASCAL case
 folder > KEBAB case
 cs > SNAKE case
 */

//MITTASK-N:
// function getString(string: string) {
//   const string1 = string.split("").reverse().join("");

//   if (string === string1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(getString("level"));

//MITTASK-M:

// function getObject(arr: (number | string)[]) {
//   return arr.map((arr: number | string) => {
//     if (typeof arr !== "number") {
//       return "Iltimos raqam kiriting!";
//     }
//     let a = arr * arr;
//     return {
//       number: arr,
//       square: a,
//     };
//   });
// }
// console.log(getObject([1, 3, 6, "ndedmm"]));

//MITTASK-L

// function getString(string: string) {
//   return string
//     .split(" ")
//     .map((word: string) => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(getString("salom hammaga "));
