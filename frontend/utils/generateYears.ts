function generate(from: number): number[] {
  const currYear = new Date().getFullYear();
  return Array.from(new Array(currYear - from + 1), (val, index) => {
    return currYear - index;
  });
}

export default generate;
