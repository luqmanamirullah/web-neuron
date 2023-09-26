function generate(from: number, lastYear: number): number[] {
  return Array.from(new Array(lastYear - from + 1), (val, index) => {
    return lastYear - index;
  });
}

export default generate;
