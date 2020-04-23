const input =
  "3,8,1005,8,324,1106,0,11,0,0,0,104,1,104,0,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,1002,8,1,29,2,1102,17,10,3,8,102,-1,8,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,55,2,4,6,10,1,1006,10,10,1,6,14,10,3,8,1002,8,-1,10,101,1,10,10,4,10,1008,8,1,10,4,10,101,0,8,89,3,8,102,-1,8,10,1001,10,1,10,4,10,108,0,8,10,4,10,1002,8,1,110,1,104,8,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,1008,8,1,10,4,10,102,1,8,137,2,9,17,10,2,1101,14,10,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,0,10,4,10,101,0,8,167,1,107,6,10,1,104,6,10,2,1106,6,10,3,8,1002,8,-1,10,101,1,10,10,4,10,108,1,8,10,4,10,1001,8,0,200,1006,0,52,1006,0,70,1006,0,52,3,8,102,-1,8,10,101,1,10,10,4,10,1008,8,1,10,4,10,1002,8,1,232,1006,0,26,1,104,19,10,3,8,102,-1,8,10,1001,10,1,10,4,10,108,0,8,10,4,10,102,1,8,260,1,2,15,10,2,1102,14,10,3,8,1002,8,-1,10,1001,10,1,10,4,10,108,0,8,10,4,10,1001,8,0,290,1,108,11,10,1006,0,36,1006,0,90,1006,0,52,101,1,9,9,1007,9,940,10,1005,10,15,99,109,646,104,0,104,1,21101,0,666412360596,1,21101,341,0,0,1105,1,445,21101,838366659476,0,1,21102,1,352,0,1106,0,445,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,3,10,104,0,104,1,3,10,104,0,104,0,3,10,104,0,104,1,21101,0,97713695975,1,21102,1,399,0,1106,0,445,21102,179469028392,1,1,21101,410,0,0,1105,1,445,3,10,104,0,104,0,3,10,104,0,104,0,21102,1,988220650260,1,21101,433,0,0,1105,1,445,21101,0,838345843560,1,21101,444,0,0,1106,0,445,99,109,2,22101,0,-1,1,21102,1,40,2,21102,1,476,3,21101,466,0,0,1106,0,509,109,-2,2105,1,0,0,1,0,0,1,109,2,3,10,204,-1,1001,471,472,487,4,0,1001,471,1,471,108,4,471,10,1006,10,503,1101,0,0,471,109,-2,2106,0,0,0,109,4,1202,-1,1,508,1207,-3,0,10,1006,10,526,21101,0,0,-3,22101,0,-3,1,22102,1,-2,2,21102,1,1,3,21101,0,545,0,1106,0,550,109,-4,2105,1,0,109,5,1207,-3,1,10,1006,10,573,2207,-4,-2,10,1006,10,573,21201,-4,0,-4,1106,0,641,21201,-4,0,1,21201,-3,-1,2,21202,-2,2,3,21102,592,1,0,1106,0,550,21201,1,0,-4,21101,0,1,-1,2207,-4,-2,10,1006,10,611,21101,0,0,-1,22202,-2,-1,-2,2107,0,-3,10,1006,10,633,22102,1,-1,1,21102,1,633,0,106,0,508,21202,-2,-1,-2,22201,-4,-2,-4,109,-5,2105,1,0";
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
        let out = getOutput(
          { mode: paramModes[0], value: outputArray[current + 1] },
          outputArray,
          currentRelativeBase
        );
        current = current + 2;
        yield out;
        break;
      case 5:
        let param1Of5 = getValueBasedOnMode(
          outputArray[current + 1],
          paramModes[0],
          outputArray,
          currentRelativeBase
        );
        if (param1Of5 !== 0) {
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
        return 99;
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
  return [
    retVal.value && (retVal.value[0] === 99 ? "DONE" : retVal.value[0]),
    retVal.value && retVal.value[1],
    retVal.value && retVal.value[2]
  ];
};

const panels = new Map();
const getPanelsValue = currentPos => {
  return panels.get(currentPos[0] + "," + currentPos[1]) || 0;
};

const paintPanel = (value, currentPos) => {
  let panelPainted = 0;
  if (panels.get(currentPos[0] + "," + currentPos[1]) === undefined) {
    panelPainted = 1;
  }
  panels.set(currentPos[0] + "," + currentPos[1], value);
  return panelPainted;
};

const moveRobot = (turn, currentPos) => {
  //turn - 0 left, 1 right 90 deg
  let newDirection, newCoords;
  if (turn) {
    switch (currentPos[2]) {
      case 1:
        newDirection = 4;
        break;
      case 2:
        newDirection = 3;
        break;
      case 3:
        newDirection = 1;
        break;
      case 4:
        newDirection = 2;
        break;
    }
  } else {
    switch (currentPos[2]) {
      case 1:
        newDirection = 3;
        break;
      case 2:
        newDirection = 4;
        break;
      case 3:
        newDirection = 2;
        break;
      case 4:
        newDirection = 1;
        break;
    }
  }

  switch (newDirection) {
    case 1:
      newCoords = [currentPos[0], currentPos[1] + 1];
      break;
    case 2:
      newCoords = [currentPos[0], currentPos[1] - 1];
      break;
    case 3:
      newCoords = [currentPos[0] - 1, currentPos[1]];
      break;
    case 4:
      newCoords = [currentPos[0] + 1, currentPos[1]];
      break;
  }

  return [...newCoords, newDirection];
};

const runPaintProgram = () => {
  const formattedNumberArray = formatNumberArray(input);
  let x = runProgram(formattedNumberArray);
  let firstRetVal = {};
  let secondRetVal = {};
  let currentPos = [0, 0, 1]; //x coordinate, y coordinate, direction - 1 up, 2 down, 3 left, 4 right
  let noOfPaintedPanels = 0;
  panels.set("0,0", 1);
  while (firstRetVal.done !== true && secondRetVal.done !== true) {
    x.next();
    let inputParam = getPanelsValue(currentPos);
    firstRetVal = x.next(inputParam);
    if (firstRetVal.value !== 99) {
      noOfPaintedPanels =
        noOfPaintedPanels +
        paintPanel(firstRetVal.value, currentPos, noOfPaintedPanels);
    }
    secondRetVal = x.next();
    if (secondRetVal.value !== 99) {
      currentPos = moveRobot(secondRetVal.value, currentPos);
    }
  }
  console.log("Number of panels painted atleast once: ", noOfPaintedPanels);
};

runPaintProgram();
//console.log(panels);

const convertPanelsIntoArray = () => {
  const [minX, minY] = [...panels.keys()].reduce(
    (acc, tuple) => {
      let [x, y] = tuple.split(",").map(Number);
      return [x < acc[0] ? x : acc[0], y < acc[1] ? y : acc[1]];
    },
    [Infinity, Infinity]
  );

  const panelsArray = [...panels.entries()].reduce((arr, entry) => {
    let [key, value] = entry;
    let [x, y] = key.split(",").map(Number);
    if (arr[x - minX]) {
      arr[x - minX][y - minY] = value || 0;
    } else {
      arr[x - minX] = [];
      arr[x - minX][y - minY] = value || 0;
    }
    return arr;
  }, []);

  console.log(panelsArray);

  for (let i = 0; i < panelsArray.length; i++) {
    for (let j = 0; j < panelsArray[i].length; j++) {
      let value = panelsArray[i][j] ? String(panelsArray[i][j]) : " ";
      process.stdout.write(value);
    }
    console.log("\n");
  }
};

convertPanelsIntoArray();
