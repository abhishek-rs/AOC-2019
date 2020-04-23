//const rl = require("readline").createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

const input =
  "3,8,1001,8,10,8,105,1,0,0,21,38,63,76,89,106,187,268,349,430,99999,3,9,1001,9,5,9,102,3,9,9,1001,9,2,9,4,9,99,3,9,101,4,9,9,102,3,9,9,101,4,9,9,1002,9,3,9,101,2,9,9,4,9,99,3,9,101,5,9,9,1002,9,4,9,4,9,99,3,9,101,2,9,9,1002,9,5,9,4,9,99,3,9,1001,9,5,9,1002,9,5,9,1001,9,5,9,4,9,99,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99";
const testx = "3,9,8,9,10,9,4,9,99,-1,8";

const test1 = "1,0,0,0,99";
const test2 = "2,3,0,3,99";
const test3 = "2,4,4,5,99,0";
const test4 = "1,1,1,4,99,5,6,0,99";
const test5 =
  "3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5";

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

const getOutput = (x, arr) => {
  return x.mode ? x.value : arr[x.value];
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

/*const getLine = (function() {
  const getLineGen = (async function*() {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => (await getLineGen.next()).value;
})();*/

function* runProgram(inputArray, currentParam = null) {
  let current = currentParam || 0;
  let outputArray = [...inputArray];
  while (current < outputArray.length) {
    let [opcode, paramModes] = splitOpcodesAndModes(outputArray[current]);
    switch (opcode) {
      case 1:
        outputArray = mutateAddWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 2:
        outputArray = mutateMultiplyWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 3:
        //outputArray[outputArray[current + 1]] = Number(await getLine());
        outputArray[outputArray[current + 1]] = yield;
        current = current + 2;
        break;
      case 4:
        //printOutput(
        let out = getOutput(
          { mode: paramModes[0], value: outputArray[current + 1] },
          outputArray
        );
        current = current + 2;
        return [out, outputArray, current];
        break;
      case 5:
        let param1Of5 = paramModes[0]
          ? outputArray[current + 1]
          : outputArray[outputArray[current + 1]];
        if (param1Of5 !== 0) {
          current = paramModes[1]
            ? outputArray[current + 2]
            : outputArray[outputArray[current + 2]];
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
        } else {
          current = current + 3;
        }
        break;
      case 7:
        outputArray = lessThan(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 8:
        outputArray = equalTo(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray
        );
        current = current + 4;
        break;
      case 9:
        return [99, outputArray];
        break;
      default:
        console.log(
          `Unknown opcode ${outputArray[current]} at position ${current}`,
          typeof current
        );
        process.exit(1);
        break;
    }
  }
  return;
}

const perm = xs => {
  let ret = [];
  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
    if (!rest.length) {
      ret.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]));
      }
    }
  }
  return ret;
};

const formattedNumberArray = formatNumberArray(input);

const runProgramWithSetting = (
  phase,
  input,
  prevState = [],
  prevCurrent = null
) => {
  let x = prevState.length
    ? runProgram(prevState, prevCurrent)
    : runProgram(formattedNumberArray);
  let hasStopped = x.next();
  if (hasStopped.value && hasStopped.value[0] === 99) {
    return ["DONE", hasStopped.value[1], null];
  }
  !prevState.length && x.next(phase);
  let retVal = x.next(input);
  //while (retVal.value === undefined) {
  //  retVal = x.next(input);
  //}
  //console.log(retVal);
  return [
    retVal.value && (retVal.value[0] === 99 ? "DONE" : retVal.value[0]),
    retVal.value && retVal.value[1],
    retVal.value && retVal.value[2]
  ];
};

const executeAmplifiers = () => {
  //const phaseSettings = [0, 1, 2, 3, 4];
  const phaseSettings = [5, 6, 7, 8, 9];
  const permutationsOfSettings = perm(phaseSettings);
  const thrustOutputs = [];
  for (let i = 0; i < permutationsOfSettings.length; i++) {
    let currentPerm = permutationsOfSettings[i];
    let ampStates = [];
    let ampCurrents = [];
    let input = 0;
    let retValue = "";
    let j = 0;
    //for (let j = 0; j < currentPerm.length; j++) {
    while (retValue !== "DONE") {
      let currentAmpState, nextCurrent;
      [retValue, currentAmpState, nextCurrent] = runProgramWithSetting(
        currentPerm[j],
        input,
        ampStates[j] || [],
        ampCurrents[j] || null
      );
      if (retValue !== "DONE") {
        input = retValue;
      }
      ampStates[j] = currentAmpState;
      ampCurrents[j] = nextCurrent;
      j = (j + 1) % 5;
    }
    console.log(currentPerm, input);
    thrustOutputs.push(input);
  }
  return thrustOutputs.reduce((max, x) => (x > max ? x : max), 0);
};

console.log("Max thrust: ", executeAmplifiers());
