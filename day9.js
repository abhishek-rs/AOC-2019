//const rl = require("readline").createInterface({
//  input: process.stdin,
//  output: process.stdout
//});

const input =
  "1102,34463338,34463338,63,1007,63,34463338,63,1005,63,53,1102,1,3,1000,109,988,209,12,9,1000,209,6,209,3,203,0,1008,1000,1,63,1005,63,65,1008,1000,2,63,1005,63,904,1008,1000,0,63,1005,63,58,4,25,104,0,99,4,0,104,0,99,4,17,104,0,99,0,0,1101,234,0,1027,1101,0,568,1023,1102,844,1,1025,1101,0,23,1008,1102,1,1,1021,1102,27,1,1011,1101,0,26,1004,1102,1,586,1029,1102,29,1,1014,1101,0,22,1015,1102,36,1,1016,1101,35,0,1013,1102,20,1,1003,1102,1,37,1019,1101,30,0,1006,1102,34,1,1000,1101,571,0,1022,1102,1,28,1005,1101,39,0,1009,1102,38,1,1017,1102,591,1,1028,1102,1,31,1007,1102,24,1,1010,1101,0,33,1001,1101,0,21,1018,1101,0,0,1020,1101,25,0,1002,1102,32,1,1012,1101,0,237,1026,1101,0,853,1024,109,29,1206,-9,195,4,187,1106,0,199,1001,64,1,64,1002,64,2,64,109,-26,2102,1,0,63,1008,63,23,63,1005,63,223,1001,64,1,64,1105,1,225,4,205,1002,64,2,64,109,16,2106,0,8,1106,0,243,4,231,1001,64,1,64,1002,64,2,64,109,-19,21101,40,0,10,1008,1010,40,63,1005,63,265,4,249,1106,0,269,1001,64,1,64,1002,64,2,64,109,-2,2107,31,8,63,1005,63,289,1001,64,1,64,1105,1,291,4,275,1002,64,2,64,109,2,1208,7,28,63,1005,63,307,1106,0,313,4,297,1001,64,1,64,1002,64,2,64,109,-1,1207,9,24,63,1005,63,335,4,319,1001,64,1,64,1105,1,335,1002,64,2,64,109,5,1201,0,0,63,1008,63,25,63,1005,63,355,1105,1,361,4,341,1001,64,1,64,1002,64,2,64,109,-13,1202,9,1,63,1008,63,34,63,1005,63,383,4,367,1105,1,387,1001,64,1,64,1002,64,2,64,109,32,1205,-3,403,1001,64,1,64,1106,0,405,4,393,1002,64,2,64,109,-14,2108,31,-2,63,1005,63,423,4,411,1105,1,427,1001,64,1,64,1002,64,2,64,109,11,1206,1,439,1105,1,445,4,433,1001,64,1,64,1002,64,2,64,109,-21,1208,4,20,63,1005,63,467,4,451,1001,64,1,64,1105,1,467,1002,64,2,64,109,6,1207,-5,33,63,1005,63,487,1001,64,1,64,1106,0,489,4,473,1002,64,2,64,109,-12,1202,8,1,63,1008,63,34,63,1005,63,509,1106,0,515,4,495,1001,64,1,64,1002,64,2,64,109,28,1205,0,529,4,521,1106,0,533,1001,64,1,64,1002,64,2,64,109,3,21101,41,0,-9,1008,1015,38,63,1005,63,557,1001,64,1,64,1106,0,559,4,539,1002,64,2,64,109,-11,2105,1,10,1105,1,577,4,565,1001,64,1,64,1002,64,2,64,109,23,2106,0,-8,4,583,1105,1,595,1001,64,1,64,1002,64,2,64,109,-15,21108,42,42,-6,1005,1015,613,4,601,1106,0,617,1001,64,1,64,1002,64,2,64,109,-14,21107,43,44,8,1005,1015,639,4,623,1001,64,1,64,1106,0,639,1002,64,2,64,109,11,2107,38,-9,63,1005,63,661,4,645,1001,64,1,64,1106,0,661,1002,64,2,64,109,-2,21107,44,43,3,1005,1019,677,1105,1,683,4,667,1001,64,1,64,1002,64,2,64,109,-7,21108,45,42,1,1005,1010,703,1001,64,1,64,1106,0,705,4,689,1002,64,2,64,109,-5,2102,1,1,63,1008,63,28,63,1005,63,727,4,711,1106,0,731,1001,64,1,64,1002,64,2,64,109,13,21102,46,1,0,1008,1017,46,63,1005,63,753,4,737,1106,0,757,1001,64,1,64,1002,64,2,64,109,-4,2101,0,-5,63,1008,63,20,63,1005,63,781,1001,64,1,64,1105,1,783,4,763,1002,64,2,64,109,1,21102,47,1,0,1008,1014,48,63,1005,63,803,1105,1,809,4,789,1001,64,1,64,1002,64,2,64,109,-3,2101,0,-4,63,1008,63,31,63,1005,63,835,4,815,1001,64,1,64,1105,1,835,1002,64,2,64,109,6,2105,1,7,4,841,1001,64,1,64,1105,1,853,1002,64,2,64,109,-21,2108,33,10,63,1005,63,873,1001,64,1,64,1105,1,875,4,859,1002,64,2,64,109,6,1201,4,0,63,1008,63,30,63,1005,63,901,4,881,1001,64,1,64,1105,1,901,4,64,99,21102,27,1,1,21102,1,915,0,1106,0,922,21201,1,64720,1,204,1,99,109,3,1207,-2,3,63,1005,63,964,21201,-2,-1,1,21102,1,942,0,1105,1,922,21202,1,1,-1,21201,-2,-3,1,21101,957,0,0,1105,1,922,22201,1,-1,-2,1105,1,968,21202,-2,1,-2,109,-3,2106,0,0";
const testx = "104,1125899906842624,99";

const test1 = "109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99";

const formatNumberArray = str =>
  str
    .split(",")
    .filter(Boolean)
    .map(Number);

const getValueBasedOnMode = (value, mode, arr, relBase) =>
  mode === 0
    ? arr[value] || 0
    : mode === 1
    ? value || 0
    : arr[relBase + value] || 0;

const mutateAddWithParams = (x, y, z, arr, relativeBase) => {
  let firstValue = getValueBasedOnMode(x.value, x.mode, arr, relativeBase);
  let secondValue = getValueBasedOnMode(y.value, y.mode, arr, relativeBase);
  if (z.mode === 0) {
    arr[z.value] = firstValue + secondValue;
  } else {
    arr[z.value + relativeBase] = firstValue + secondValue;
  }
  return arr;
};

const mutateMultiplyWithParams = (x, y, z, arr, relativeBase) => {
  let firstValue = getValueBasedOnMode(x.value, x.mode, arr, relativeBase);
  let secondValue = getValueBasedOnMode(y.value, y.mode, arr, relativeBase);
  if (z.mode === 0) {
    arr[z.value] = firstValue * secondValue;
  } else {
    arr[z.value + relativeBase] = firstValue * secondValue;
  }
  return arr;
};

const printOutput = (x, arr, relativeBase) => {
  console.log(
    "Output code: ",
    getValueBasedOnMode(x.value, x.mode, arr, relativeBase)
  );
};

const getOutput = (x, arr, relativeBase) => {
  return getValueBasedOnMode(x.value, x.mode, arr, relativeBase);
};

const lessThan = (x, y, z, arr, relativeBase) => {
  let firstValue = getValueBasedOnMode(x.value, x.mode, arr, relativeBase);
  let secondValue = getValueBasedOnMode(y.value, y.mode, arr, relativeBase);
  if (z.mode === 0) {
    arr[z.value] = firstValue < secondValue ? 1 : 0;
  } else {
    arr[z.value + relativeBase] = firstValue < secondValue ? 1 : 0;
  }
  return arr;
};

const equalTo = (x, y, z, arr, relativeBase) => {
  let firstValue = getValueBasedOnMode(x.value, x.mode, arr, relativeBase);
  let secondValue = getValueBasedOnMode(y.value, y.mode, arr, relativeBase);
  if (z.mode === 0) {
    arr[z.value] = firstValue === secondValue ? 1 : 0;
  } else {
    arr[z.value + relativeBase] = firstValue === secondValue ? 1 : 0;
  }
  return arr;
};

const splitOpcodesAndModes = codeWithModes => {
  const reversedCode = [...String(codeWithModes)].reverse();
  const {
    0: opcode1,
    1: opcode2,
    2: firstParamMode,
    3: secondParamMode,
    4: thirdParamMode
  } = reversedCode;
  return [
    Number((opcode2 || 0) + opcode1),
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

function* runProgram(inputArray, currentParam = null, relativeBase = 0) {
  let current = currentParam || 0;
  let outputArray = [...inputArray];
  let currentRelativeBase = relativeBase || 0;
  while (current < outputArray.length) {
    let [opcode, paramModes] = splitOpcodesAndModes(outputArray[current]);
    switch (opcode) {
      case 1:
        outputArray = mutateAddWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray,
          currentRelativeBase
        );
        current = current + 4;
        break;
      case 2:
        outputArray = mutateMultiplyWithParams(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray,
          currentRelativeBase
        );
        current = current + 4;
        break;
      case 3:
        //outputArray[outputArray[current + 1]] = Number(await getLine());
        if (paramModes[0] === 0) {
          outputArray[outputArray[current + 1]] = yield;
        } else {
          outputArray[outputArray[current + 1] + currentRelativeBase] = yield;
        }
        current = current + 2;
        break;
      case 4:
        //printOutput(
        printOutput(
          { mode: paramModes[0], value: outputArray[current + 1] },
          outputArray,
          currentRelativeBase
        );
        current = current + 2;
        //return [out, outputArray, current];
        break;
      case 5:
        //let param1Of5 = paramModes[0]
        //  ? outputArray[current + 1]
        //  : outputArray[outputArray[current + 1]];
        let param1Of5 = getValueBasedOnMode(
          outputArray[current + 1],
          paramModes[0],
          outputArray,
          currentRelativeBase
        );
        if (param1Of5 !== 0) {
          //  current = paramModes[1]
          //    ? outputArray[current + 2]
          //    : outputArray[outputArray[current + 2]];
          current = getValueBasedOnMode(
            outputArray[current + 2],
            paramModes[1],
            outputArray,
            currentRelativeBase
          );
        } else {
          current = current + 3;
        }
        break;
      case 6:
        let param1Of6 = getValueBasedOnMode(
          outputArray[current + 1],
          paramModes[0],
          outputArray,
          currentRelativeBase
        );
        if (param1Of6 === 0) {
          current = getValueBasedOnMode(
            outputArray[current + 2],
            paramModes[1],
            outputArray,
            currentRelativeBase
          );
        } else {
          current = current + 3;
        }
        break;
      case 7:
        outputArray = lessThan(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray,
          currentRelativeBase
        );
        current = current + 4;
        break;
      case 8:
        outputArray = equalTo(
          { mode: paramModes[0], value: outputArray[current + 1] },
          { mode: paramModes[1], value: outputArray[current + 2] },
          { mode: paramModes[2], value: outputArray[current + 3] },
          outputArray,
          currentRelativeBase
        );
        current = current + 4;
        break;
      case 9:
        let valueToModifyRelativeMode = getValueBasedOnMode(
          outputArray[current + 1],
          paramModes[0],
          outputArray,
          currentRelativeBase
        );
        currentRelativeBase =
          currentRelativeBase < 0
            ? currentRelativeBase - valueToModifyRelativeMode
            : currentRelativeBase + valueToModifyRelativeMode;
        current = current + 2;
        break;
      case 99:
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

//console.log("Max thrust: ", executeAmplifiers());
const formattedNumberArray = formatNumberArray(input);
let x = runProgram(formattedNumberArray);
x.next();
x.next(2);
//let retVal = x.next(1);
//console.log("Answer: ", retVal.value);
