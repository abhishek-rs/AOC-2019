const input =
  ".##.#.#....#.#.#..##..#.#.|#.##.#..#.####.##....##.#.|###.##.##.#.#...#..###....|####.##..###.#.#...####..#|..#####..#.#.#..#######..#|.###..##..###.####.#######|.##..##.###..##.##.....###|#..#..###..##.#...#..####.|....#.#...##.##....#.#..##|..#.#.###.####..##.###.#.#|.#..##.#####.##.####..#.#.|#..##.#.#.###.#..##.##....|#.#.##.#.##.##......###.#.|#####...###.####..#.##....|.#####.#.#..#.##.#.#...###|.#..#.##.#.#.##.#....###.#|.......###.#....##.....###|#..#####.#..#..##..##.#.##|##.#.###..######.###..#..#|#.#....####.##.###....####|..#.#.#.########.....#.#.#|.##.#.#..#...###.####..##.|##...###....#.##.##..#....|..##.##.##.#######..#...#.|.###..#.#..#...###..###.#.|#..#..#######..#.#..#..#.#";
const test =
  ".#..#..###|####.###.#|....###.#.|..###.##.#|##.##.#.#.|....###..#|..#.#..#.#|#..#.#.###|.##...##.#|.....#.#..";
const test2 = ".#..#|.....|#####|....#|...##";
const input2DArray = input.split("|").reduce((arr, row) => {
  arr.push(row);
  return arr;
}, []);

const allAsteroids = [];

for (i = 0; i < input2DArray.length; i++) {
  for (j = 0; j < input2DArray[0].length; j++) {
    if (input2DArray[i][j] === "#") {
      allAsteroids.push([j, i]);
    }
  }
}

const isOnTheLine = (testPoint, pointOnTheLine, lineSlope) => {
  return (
    (testPoint[1] - pointOnTheLine[1]) / (testPoint[0] - pointOnTheLine[0]) ===
    lineSlope
  );
};

const isInBetween = (testPoint, origin, dest) => {
  let xInBetween = false;
  let yInBetween = false;
  xInBetween =
    origin[0] <= dest[0]
      ? testPoint[0] >= origin[0] && testPoint[0] <= dest[0]
      : testPoint[0] <= origin[0] && testPoint[0] >= dest[0];
  yInBetween =
    origin[1] <= dest[1]
      ? testPoint[1] >= origin[1] && testPoint[1] <= dest[1]
      : testPoint[1] <= origin[1] && testPoint[1] >= dest[1];
  return xInBetween && yInBetween;
};

const asteroidDetectionMap = new Map();

for (let i = 0; i < allAsteroids.length; i++) {
  let currentAsteroid = allAsteroids[i];
  let noOfDetectableAsteroids = 0;
  for (let j = 0; j < allAsteroids.length; j++) {
    if (i !== j) {
      let destAsteroid = allAsteroids[j];
      let hasBlockers = false;
      let straightLineSlope =
        (destAsteroid[1] - currentAsteroid[1]) /
        (destAsteroid[0] - currentAsteroid[0]);
      for (let k = 0; k < allAsteroids.length; k++) {
        if (k !== i && k !== j) {
          let potentiallyBlockingAsteroid = allAsteroids[k];
          if (
            isOnTheLine(
              potentiallyBlockingAsteroid,
              currentAsteroid,
              straightLineSlope
            ) &&
            isInBetween(
              potentiallyBlockingAsteroid,
              currentAsteroid,
              destAsteroid
            )
          ) {
            hasBlockers = true;
            break;
          }
        }
      }
      if (!hasBlockers) {
        noOfDetectableAsteroids = noOfDetectableAsteroids + 1;
      }
    }
  }
  asteroidDetectionMap.set(allAsteroids[i].join(","), noOfDetectableAsteroids);
}
console.log(asteroidDetectionMap, allAsteroids);

console.log(
  "Answer: ",
  [...asteroidDetectionMap.values()].reduce(
    (max, item) => (item > max ? item : max),
    0
  )
);
