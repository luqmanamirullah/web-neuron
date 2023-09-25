function divideData<T>(arr: T[]): T[][] {
  const length = arr.length;
  const third = Math.ceil(length / 3);

  const firstRow = arr.slice(0, third);
  const secondRow = arr.slice(third, 2 * third);
  const thirdRow = arr.slice(2 * third);

  return [firstRow, secondRow, thirdRow];
}

export default divideData;