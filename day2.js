const input =
  "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,9,23,27,2,27,6,31,1,5,31,35,2,9,35,39,2,6,39,43,2,43,13,47,2,13,47,51,1,10,51,55,1,9,55,59,1,6,59,63,2,63,9,67,1,67,6,71,1,71,13,75,1,6,75,79,1,9,79,83,2,9,83,87,1,87,6,91,1,91,13,95,2,6,95,99,1,10,99,103,2,103,9,107,1,6,107,111,1,10,111,115,2,6,115,119,1,5,119,123,1,123,13,127,1,127,5,131,1,6,131,135,2,135,13,139,1,139,2,143,1,143,10,0,99,2,0,14,0";
const test1 = "1,0,0,0,99";
const test2 = "2,3,0,3,99";
const test3 = "2,4,4,5,99,0";
const test4 = "1,1,1,4,99,5,6,0,99";

const formatNumberArray = str =>
  str
    .split(",")
    .filter(Boolean)
    .map(Number);

let mutateAdd = (x, y, z, arr) => {
  arr[z] = arr[x] + arr[y];
  return arr;
};

let mutateMultiply = (x, y, z, arr) => {
  arr[z] = arr[x] * arr[y];
  return arr;
};

const runProgram = inputArray => {
  let current = 0;
  let outputArray = [...inputArray];
  while (current < outputArray.length) {
    switch (outputArray[current]) {
      case 1:
        outputArray = mutateAdd(
          outputArray[current + 1],
          outputArray[current + 2],
          outputArray[current + 3],
          outputArray
        );
        break;
      case 2:
        outputArray = mutateMultiply(
          outputArray[current + 1],
          outputArray[current + 2],
          outputArray[current + 3],
          outputArray
        );
        break;
      case 99:
        return outputArray;
      default:
        console.log(`Unknown opcode at position ${current}`);
        break;
    }
    current = current + 4;
  }
  return outputArray;
};

const replaceNounAndVerbInInput = (noun, verb, inputArray) => {
  let output = [...inputArray];
  output[1] = noun;
  output[2] = verb;
  return output;
};

let done = 0;
const formattedNumberArray = formatNumberArray(input);

for (let noun = 1; noun < 99; noun++) {
  for (let verb = 1; verb < 99; verb++) {
    console.log(noun, verb);
    let programOutput = runProgram(
      replaceNounAndVerbInInput(noun, verb, formattedNumberArray)
    );
    console.log("currentOutput", programOutput[0]);
    if (programOutput[0] === 19690720) {
      done = 1;
      console.log("Answer: ", 100 * noun + verb);
      break;
      console.log("breaking2");
    }
  }
  if (done === 1) {
    console.log("breaking");
    break;
  }
}
if (!done) {
  console.log("No answer found");
} else {
  console.log("Program complete");
}

//console.log(runProgram(replaceNounAndVerbInInput(12, 2, formattedNumberArray)));
