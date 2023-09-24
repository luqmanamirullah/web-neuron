interface Methodology {
  id: number;
  name: string;
  method: string;
}

const methodologies: Methodology[] = [
  {
    id: 1,
    name: 'Agile',
    method: '/assets/images/agile.png',
  },
  {
    id: 2,
    name: 'Scrum',
    method: '/assets/images/agile.png',
  },
  {
    id: 3,
    name: 'Kanban',
    method: '/assets/images/agile.png',
  },
  {
    id: 4,
    name: 'Waterfall',
    method: '/assets/images/agile.png',
  },
];

export default methodologies;
