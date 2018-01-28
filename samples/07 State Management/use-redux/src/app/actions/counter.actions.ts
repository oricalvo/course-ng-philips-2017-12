export function inc(steps: number) {
  return {
    type: "INC",
    steps: steps,
  };
}

export function dec() {
  return {
    type: "DEC",
  };
}
