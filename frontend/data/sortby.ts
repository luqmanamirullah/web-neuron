export interface Sorts {
  readonly id: number;
  readonly name: string;
  readonly order: string;
}
const sorts: Sorts[] = [
  {
    id: 1,
    name: 'date',
    order: 'desc',
  },
  {
    id: 2,
    name: 'date',
    order: 'asc',
  },
  {
    id: 3,
    name: 'product name',
    order: 'desc',
  },
  {
    id: 4,
    name: 'product name',
    order: 'asc',
  },
];

export default sorts;
