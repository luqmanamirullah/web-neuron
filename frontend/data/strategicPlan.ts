interface Plan {
  id: number;
  planTitle: string;
  content: { title: string; desc: string }[];
}

export const planData: Plan[] = [
  {
    id: 1,
    planTitle: 'Finance',
    content: [
      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },
    ],
  },

  {
    id: 2,
    planTitle: 'Work',
    content: [
      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },
    ],
  },

  {
    id: 3,
    planTitle: 'Efficiency',
    content: [
      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },
    ],
  },
];
