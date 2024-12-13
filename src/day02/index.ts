import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type SafeMode = "inc" | "dec";
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;
  input.split("\n").map((v) => {
    const lineValues = v.split(" ");

    let safe = true;
    let mode: SafeMode | undefined = undefined;

    for (let index = 0; index < lineValues.length - 1; index++) {
      const v1 = parseInt(lineValues[index]);
      const v2 = parseInt(lineValues[index + 1]);

      // set initial increasing or decreasing
      if (index === 0) {
        mode = checkMode(v1, v2);
      }

      // if swapped inc/dec, bad
      if (mode !== checkMode(v1, v2)) {
        safe = false;
        return;
      }

      const val = Math.abs(v2 - v1);

      // check if more then 3, or 0 --- too big diff
      if (val > 3 || val === 0) {
        safe = false;
        return;
      }
    }

    if (safe) sum++;
  });

  return sum;
};

const checkMode = (v1: number, v2: number): SafeMode => {
  const result = v2 - v1;
  if (result > 0) {
    return "inc";
  } else {
    return "dec";
  }
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;
  input.split("\n").map((v) => {
    const lineValues = v.split(" ");

    let unsafe = 0;
    let actuallySafe = true;

    let mode: SafeMode | undefined = undefined;

    for (let index = 0; index < lineValues.length - 1; index++) {
      const v1 = parseInt(lineValues[index]);
      const v2 = parseInt(lineValues[index + 1]);

      // set initial increasing or decreasing
      if (index === 0) {
        mode = checkMode(v1, v2);
      }

      // if swapped inc/dec, bad
      if (mode !== checkMode(v1, v2)) {
        unsafe++;
      }

      const val = Math.abs(v2 - v1);

      // check if more then 3, or 0 --- too big diff
      if (val > 3 || val === 0) {
        unsafe++;
      }

      if (unsafe === 2) {
        actuallySafe = false;
        return;
      }
    }

    if (actuallySafe) sum++;
  });

  return sum;
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
