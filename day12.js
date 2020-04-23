const input =
  "<x=13, y=9, z=5>|<x=8, y=14, z=-2>|<x=-5, y=4, z=11>|<x=2, y=-6, z=1>";

const test =
  "<x=-1, y=0, z=2>|<x=2, y=-10, z=-7>|<x=4, y=-8, z=8>|<x=3, y=5, z=-1>";

let moonPositions = input.split("|").map(coords => {
  return coords.split(",").map(coord => Number(coord.match(/[-]*[0-9]+/g)));
});

const moonVelocities = moonPositions.reduce((acc, _) => {
  acc.push([0, 0, 0]);
  return acc;
}, []);

for (let i = 0; i < 1000; i++) {
  let newMoonPositions = Array.from(moonPositions, x => Array.from(x));
  for (let moon = 0; moon < moonPositions.length; moon++) {
    let gravityX = 0;
    let gravityY = 0;
    let gravityZ = 0;
    for (let otherMoon = 0; otherMoon < moonPositions.length; otherMoon++) {
      if (moon !== otherMoon) {
        if (moonPositions[moon][0] < moonPositions[otherMoon][0]) {
          gravityX = gravityX + 1;
        } else if (moonPositions[moon][0] > moonPositions[otherMoon][0]) {
          gravityX = gravityX - 1;
        }

        if (moonPositions[moon][1] < moonPositions[otherMoon][1]) {
          gravityY = gravityY + 1;
        } else if (moonPositions[moon][1] > moonPositions[otherMoon][1]) {
          gravityY = gravityY - 1;
        }

        if (moonPositions[moon][2] < moonPositions[otherMoon][2]) {
          gravityZ = gravityZ + 1;
        } else if (moonPositions[moon][2] > moonPositions[otherMoon][2]) {
          gravityZ = gravityZ - 1;
        }
      }
    }
    newMoonPositions[moon][0] =
      newMoonPositions[moon][0] + gravityX + moonVelocities[moon][0];
    newMoonPositions[moon][1] =
      newMoonPositions[moon][1] + gravityY + moonVelocities[moon][1];
    newMoonPositions[moon][2] =
      newMoonPositions[moon][2] + gravityZ + moonVelocities[moon][2];
    moonVelocities[moon][0] = gravityX + moonVelocities[moon][0];
    moonVelocities[moon][1] = gravityY + moonVelocities[moon][1];
    moonVelocities[moon][2] = gravityZ + moonVelocities[moon][2];
  }
  moonPositions = Array.from(newMoonPositions, x => Array.from(x));
}

let totalEnergy = 0;

for (let moon = 0; moon < moonPositions.length; moon++) {
  let pot = 0;
  let kin = 0;
  pot =
    pot +
    Math.abs(moonPositions[moon][0]) +
    Math.abs(moonPositions[moon][1]) +
    Math.abs(moonPositions[moon][2]);
  kin =
    kin +
    Math.abs(moonVelocities[moon][0]) +
    Math.abs(moonVelocities[moon][1]) +
    Math.abs(moonVelocities[moon][2]);
  totalEnergy = totalEnergy + pot * kin;
}

console.log("Answer: ", totalEnergy);
