import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let distance = 0;

  let list1: Array<number> = [];
  let list2: Array<number> = [];

  input.split("\n").map((v, i) => {
    const lineValues = v.split("  ");
    list2.push(parseInt(lineValues[1].trim()));
    list1.push(parseInt(lineValues[0].trim()));
  });

  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  for (let index = 0; index < list1.length; index++) {
    const v1 = list1[index];
    const v2 = list2[index];

    distance += findDistance(v1, v2);
  }

  return distance;
};

const findDistance = (v1: number, v2: number) => {
  return Math.abs(v1 - v2);
};

const part2 = (rawInput: string) => {
  let list1: Array<number> = [];
  let list2: Map<number, number> = new Map();

  const input = parseInput(rawInput);
  input.split("\n").map((v) => {
    const val = v.split("  ");
    list1.push(parseInt(val[0].trim()));

    let key = parseInt(val[1]);
    let keyVal = list2.get(key);

    if (keyVal) {
      list2.set(key, keyVal + 1);
    } else {
      list2.set(key, 1);
    }
  });

  let simSum = 0;

  list1.forEach((v) => {
    let key = list2.get(v);
    if (key) {
      simSum += key * v;
    }
  });

  return simSum;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
