//MITTASK-L
function string(type) {
  return type
    .split(" ")
    .map((wort) => wort.split("").reverse().join(""))
    .join(" ");
}
console.log(string("salom !dunyo hammaga Assalomu alaykum"));
