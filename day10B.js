const input =
  ".##.#.#....#.#.#..##..#.#.|#.##.#..#.####.##....##.#.|###.##.##.#.#...#..###....|####.##..###.#.#...####..#|..#####..#.#.#..#######..#|.###..##..###.####.#######|.##..##.###..##.##.....###|#..#..###..##.#...#..####.|....#.#...##.##....#.#..##|..#.#.###.####..##.###.#.#|.#..##.#####.##.####..#.#.|#..##.#.#.###.#..##.##....|#.#.##.#.##.##......###.#.|#####...###.####..#.##....|.#####.#.#..#.##.#.#...###|.#..#.##.#.#.##.#....###.#|.......###.#....##.....###|#..#####.#..#..##..##.#.##|##.#.###..######.###..#..#|#.#....####.##.###....####|..#.#.#.########.....#.#.#|.##.#.#..#...###.####..##.|##...###....#.##.##..#....|..##.##.##.#######..#...#.|.###..#.#..#...###..###.#.|#..#..#######..#.#..#..#.#";
const test =
  ".#..#..###|####.###.#|....###.#.|..###.##.#|##.##.#.#.|....###..#|..#.#..#.#|#..#.#.###|.##...##.#|.....#.#..";
const test2 =
  ".#....#####...#..|##...##.#####..##|##...#...#.#####.|..#.....X...###..|..#.#.....#....##";
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

const calculateLineSlope = (pointA, pointB) => {
  if (pointB[0] - pointA[0] === 0) return pointB[1] <= pointA[1] ? 9999 : -9999;
  else return -(pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);
};

const calculateDistanceBetween = (pointA, pointB) => {
  return Math.sqrt(
    Math.pow(pointB[0] - pointA[0], 2) + Math.pow(pointB[1] - pointA[1], 2)
  );
};

const getSortedAsteroidsWithSlopeAndDistance = (baseStation, asteroids) => {
  let asteroidsWithSlopeAndDistance = asteroids.reduce((acc, asteroid) => {
    const x = asteroid[0];
    const y = asteroid[1];
    const slope = calculateLineSlope(asteroid, baseStation);
    const distance = calculateDistanceBetween(asteroid, baseStation);
    return [...acc, { x, y, slope, distance }];
  }, []);

  let leftHalf = asteroidsWithSlopeAndDistance.filter(
    asteroid => asteroid.x < baseStation[0]
  );
  let rightHalf = asteroidsWithSlopeAndDistance.filter(
    asteroid => asteroid.x >= baseStation[0]
  );

  rightHalf.sort(sortBasedOnSlopeAndDistance(1));
  leftHalf.sort(sortBasedOnSlopeAndDistance(1));
  return [...rightHalf, ...leftHalf];
};

const sortBasedOnSlopeAndDistance = order => (a, b) => {
  //order 0 = ascending, 1 = descending
  if (a.slope > b.slope) {
    return order ? -1 : 1;
  } else if (a.slope < b.slope) {
    return order ? 1 : -1;
  } else {
    if (a.distance < b.distance) {
      return -1;
    } else if (a.distance > b.distance) {
      return 1;
    } else {
      return 0;
    }
  }
};

const sortedAsteroids = getSortedAsteroidsWithSlopeAndDistance(
  [19, 14],
  allAsteroids
);
//console.log(sortedAsteroids);

let lastRemoved = null;
let destroyedAsteroidCount = 0;
let destroyedIndices = [0];
for (
  let i = 0;
  destroyedAsteroidCount < 200 || sortedAsteroids.length <= 0;
  i = (i + 1) % sortedAsteroids.length
) {
  if (
    destroyedIndices.includes(i) ||
    (lastRemoved && lastRemoved.slope === sortedAsteroids[i].slope)
  ) {
    continue;
  } else {
    destroyedAsteroidCount++;
    console.log(
      `Asteroid ${destroyedAsteroidCount} to be destroyed is at position ${sortedAsteroids[i].x}, ${sortedAsteroids[i].y} with slope - ${sortedAsteroids[i].slope}`
    );
    lastRemoved = sortedAsteroids[i];
    destroyedIndices.push(i);
  }
}
