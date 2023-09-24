interface Technologies {
  cateogry: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technologies[] = [
  {
    cateogry: 'Mobile',
    technologies: [
      {
        name: 'Android',
        icon: '/assets/images/react.png',
      },
      {
        name: 'iOS',
        icon: '/assets/images/react.png',
      },
      {
        name: 'React Native',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Flutter',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'FrontEnd',
    technologies: [
      {
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Angular',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Vue',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Laravel',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'BackEnd',
    technologies: [
      {
        name: 'NodeJS',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Express',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Laravel',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Django',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'Database',
    technologies: [
      {
        name: 'MongoDB',
        icon: '/assets/images/react.png',
      },
      {
        name: 'MySQL',
        icon: '/assets/images/react.png',
      },
      {
        name: 'PostgreSQL',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Firebase',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'Cloud',
    technologies: [
      {
        name: 'AWS',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Azure',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Google Cloud',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Firebase',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'DevOps',
    technologies: [
      {
        name: 'Docker',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Kubernetes',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Jenkins',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Git',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'Testing',
    technologies: [
      {
        name: 'Jest',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Cypress',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Selenium',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Jasmine',
        icon: '/assets/images/react.png',
      },
    ],
  },
  {
    cateogry: 'UI/UX',
    technologies: [
      {
        name: 'Figma',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Adobe XD',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Sketch',
        icon: '/assets/images/react.png',
      },
      {
        name: 'Invision',
        icon: '/assets/images/react.png',
      },
    ],
  },
];

export default technologies;
