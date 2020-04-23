const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const input =
  "3,225,1,225,6,6,1100,1,238,225,104,0,101,67,166,224,1001,224,-110,224,4,224,102,8,223,223,1001,224,4,224,1,224,223,223,2,62,66,224,101,-406,224,224,4,224,102,8,223,223,101,3,224,224,1,224,223,223,1101,76,51,225,1101,51,29,225,1102,57,14,225,1102,64,48,224,1001,224,-3072,224,4,224,102,8,223,223,1001,224,1,224,1,224,223,223,1001,217,90,224,1001,224,-101,224,4,224,1002,223,8,223,1001,224,2,224,1,223,224,223,1101,57,55,224,1001,224,-112,224,4,224,102,8,223,223,1001,224,7,224,1,223,224,223,1102,5,62,225,1102,49,68,225,102,40,140,224,101,-2720,224,224,4,224,1002,223,8,223,1001,224,4,224,1,223,224,223,1101,92,43,225,1101,93,21,225,1002,170,31,224,101,-651,224,224,4,224,102,8,223,223,101,4,224,224,1,223,224,223,1,136,57,224,1001,224,-138,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,11,85,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,226,226,224,102,2,223,223,1006,224,329,1001,223,1,223,1007,226,677,224,1002,223,2,223,1005,224,344,101,1,223,223,108,677,677,224,1002,223,2,223,1006,224,359,101,1,223,223,1008,226,226,224,1002,223,2,223,1005,224,374,1001,223,1,223,108,677,226,224,1002,223,2,223,1006,224,389,101,1,223,223,7,226,226,224,102,2,223,223,1006,224,404,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,419,101,1,223,223,107,226,226,224,102,2,223,223,1006,224,434,1001,223,1,223,1008,677,677,224,1002,223,2,223,1005,224,449,101,1,223,223,108,226,226,224,102,2,223,223,1005,224,464,1001,223,1,223,1108,226,677,224,1002,223,2,223,1005,224,479,1001,223,1,223,8,677,226,224,102,2,223,223,1006,224,494,1001,223,1,223,1108,677,677,224,102,2,223,223,1006,224,509,1001,223,1,223,1007,226,226,224,1002,223,2,223,1005,224,524,1001,223,1,223,7,226,677,224,1002,223,2,223,1005,224,539,1001,223,1,223,8,677,677,224,102,2,223,223,1005,224,554,1001,223,1,223,107,226,677,224,1002,223,2,223,1006,224,569,101,1,223,223,1107,226,677,224,102,2,223,223,1005,224,584,1001,223,1,223,1108,677,226,224,102,2,223,223,1006,224,599,1001,223,1,223,1008,677,226,224,102,2,223,223,1006,224,614,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,629,1001,223,1,223,1107,677,226,224,1002,223,2,223,1005,224,644,101,1,223,223,8,226,677,224,102,2,223,223,1005,224,659,1001,223,1,223,1007,677,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226";
const testx = "3,9,8,9,10,9,4,9,99,-1,8";

const test1 = "1,0,0,0,99";
const test2 = "2,3,0,3,99";
const test3 = "2,4,4,5,99,0";
const test4 = "1,1,1,4,99,5,6,0,99";

const formatNumberArray = str =>
  str
    .split(",")
    .filter(Boolean)
    .map(Number);

const mutateAddWithParams = (x, y, z, arr) => {
  arr[z.value] =
    (x.mode ? x.value : arr[x.value]) + (y.mode ? y.value : arr[y.value]);
  return arr;
};

const mutateMultiplyWithParams = (x, y, z, arr) => {
  arr[z.value] =
    (x.mode ? x.value : arr[x.value]) * (y.mode ? y.value : arr[y.value]);
  return arr;
};

const printOutput = (x, arr) => {
  console.log("Output code: ", x.mode ? x.value : arr[x.value]);
};

const lessThan = (x, y, z, arr) => {
  arr[z.value] =
    (x.mode ? x.value : arr[x.value]) < (y.mode ? y.value : arr[y.value])
      ? 1
      : 0;
  return arr;
};

const equalTo = (x, y, z, arr) => {
  arr[z.value] =
    (x.mode ? x.value : arr[x.value]) === (y.mode ? y.value : arr[y.value])
      ? 1
      : 0;
  return arr;
};

const splitOpcodesAndModes = codeWithModes => {
  const reversedCode = [...String(codeWithModes)].reverse();
  const {
    0: opcode,
    1: _,
    2: firstParamMode,
    3: secondParamMode,
    4: thirdParamMode
  } = reversedCode;
  return [
    Number(opcode),
    [
      Number(firstParamMode || 0),
      Number(secondParamMode || 0),
      Number(thirdParamMode || 0)
    ]
  ];
};

const getLine = (function() {
  const getLineGen = (async function*() {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => (await getLineGen.next()).value;
})();

const runProgram = async inputArray => {
  let current = 0;
  let outputArray = [...inputArray];
  while (current < outputArray.length) {
    console.log("New current: ", current, outputArray[current]);
    let [opcode, paramModes] = splitOpcodesAndModes(outputArray[current]);
    switch (opcode) {
      case 1:
        console.log("Adding at ", current);
        outputArray = mutateAddWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 2:
        console.log("Multiplying at ", current);
        outputArray = mutateMultiplyWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 3:
        console.log("inputting at ", current);
        outputArray[outputArray[current + 1]] = Number(await getLine());
        current = current + 2;
        break;
      case 4:
        console.log("Outputting at ", current);
        printOutput(
          { mode: paramModes[0], value: outputArray[current + 1] },
          outputArray
        );
        current = current + 2;
        break;
      case 5:
        let param1Of5 = paramModes[0]
          ? outputArray[current + 1]
          : outputArray[outputArray[current + 1]];
        if (param1Of5 !== 0) {
          current = paramModes[1]
            ? outputArray[current + 2]
            : outputArray[outputArray[current + 2]];
          console.log(
            "Jumping on true to ",
            paramModes[1]
              ? outputArray[current + 2]
              : outputArray[outputArray[current + 2]],
            paramModes,
            current
          );
        } else {
          current = current + 3;
        }
        break;
      case 6:
        let param1Of6 = paramModes[0]
          ? outputArray[current + 1]
          : outputArray[outputArray[current + 1]];
        if (param1Of6 === 0) {
          current = paramModes[1]
            ? outputArray[current + 2]
            : outputArray[outputArray[current + 2]];
          console.log(
            "Jumping on false to ",
            paramModes[1]
              ? outputArray[current + 2]
              : outputArray[outputArray[current + 2]],
            paramModes,
            current
          );
        } else {
          current = current + 3;
        }
        break;
      case 7:
        console.log("lessThaning at ", current);
        outputArray = lessThan(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 8:
        console.log("EqualToing at ", current);
        outputArray = equalTo(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 99:
        process.exit(0);
        break;
      default:
        console.log(
          `Unknown opcode ${outputArray[current]} at position ${current}`
        );
        process.exit(1);
        break;
    }
  }
  process.exit(0);
};

const formattedNumberArray = formatNumberArray(input);
runProgram(formattedNumberArray);
