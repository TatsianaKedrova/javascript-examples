//number => number, NaN, infinity,

function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log("result of function: ", sanitise("8"));

const user = { name: "Bob" };
const user2 = user;
console.log("user: ", user);
console.log("user2: ", user2);
console.log("comparison: ", user === user2);
console.log("comparison: ", user == user2);
user2.name = "Sherifchik";
const a = tyttu;

const d = yield;
