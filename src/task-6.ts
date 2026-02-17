function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);           // 1
const firstString = getFirstElement<string>(["a", "b", "c"]);     // "a"
const firstBoolean = getFirstElement<boolean>([true, false, true]); // true
console.log(firstNumber, firstString, firstBoolean);

const mixedCorrect = getFirstElement<number | string | boolean>([1, "a", true]);
console.log(mixedCorrect)