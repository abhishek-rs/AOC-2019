const input = "172851-675869";
const [start, end] = input.split("-").map(Number);
let answer = 0;

const hasAdjacentSamesiesButNotLongerThanTwo = num => {
  let numStr = `${num}`;
  return (
    (numStr[0] === numStr[1] && numStr[2] !== numStr[1]) ||
    (numStr[1] === numStr[2] &&
      numStr[0] !== numStr[1] &&
      numStr[3] !== numStr[1]) ||
    (numStr[2] === numStr[3] &&
      numStr[1] !== numStr[2] &&
      numStr[4] !== numStr[2]) ||
    (numStr[3] === numStr[4] &&
      numStr[2] !== numStr[3] &&
      numStr[5] !== numStr[3]) ||
    (numStr[4] === numStr[5] && numStr[3] !== numStr[4])
  );
};

const hasOnlyDecreasingDigits = num => {
  let numStr = `${num}`;
  return (
    Number(numStr[0]) <= Number(numStr[1]) &&
    Number(numStr[1]) <= Number(numStr[2]) &&
    Number(numStr[2]) <= Number(numStr[3]) &&
    Number(numStr[3]) <= Number(numStr[4]) &&
    Number(numStr[4]) <= Number(numStr[5])
  );
};

for (let i = start + 1; i < end; i++) {
  if (hasAdjacentSamesiesButNotLongerThanTwo(i) && hasOnlyDecreasingDigits(i)) {
    answer++;
  }
}

console.log("Answer: ", answer);
