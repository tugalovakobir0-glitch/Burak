//MITTASK-N:
function getString(string: string) {
  const string1 = string.split("").reverse().join("");

  if (string === string1) {
    return true;
  } else {
    return false;
  }
}
console.log(getString("level"));

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
