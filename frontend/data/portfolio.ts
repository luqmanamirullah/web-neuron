export interface Portfolio {
  name: string;
  desc: string;
  img: string;
  id: number;
  clientName: string;
  link: string;
  type: string;
  createdAt: string;
}

export interface Portfolios {
  currPage: number;
  pages: number;
  data: Portfolio[];
}
export const latest: Portfolio[] = [
  {
    id: 1,
    img: '/assets/images/simetri_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
  {
    id: 4,
    img: '/assets/images/telkom_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
  {
    id: 2,
    img: '/assets/images/simetri_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
  {
    id: 5,
    img: '/assets/images/telkom_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
  {
    id: 3,
    img: '/assets/images/simetri_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
  {
    id: 6,
    img: '/assets/images/telkom_preview.png',
    name: 'SIMETRIS',
    desc: 'Collect your survey data so fast and easy',
    link: 'https://issuku.com',
    type: 'Web App',
    clientName: 'Telkom Indonesia',
    createdAt: '2021-01-01',
  },
];

export const all: Portfolios = {
  pages: 10,
  currPage: 1,
  data: [
    {
      id: 1,
      img: '/assets/images/simetri_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
    {
      id: 4,
      img: '/assets/images/telkom_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
    {
      id: 2,
      img: '/assets/images/simetri_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
    {
      id: 5,
      img: '/assets/images/telkom_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
    {
      id: 3,
      img: '/assets/images/simetri_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
    {
      id: 6,
      img: '/assets/images/telkom_preview.png',
      name: 'SIMETRIS',
      desc: 'Collect your survey data so fast and easy',
      link: 'https://issuku.com',
      type: 'Web App',
      clientName: 'Telkom Indonesia',
      createdAt: '2021-01-01',
    },
  ],
};

export interface Portfolio {
  portfolioId: number;
  name: string;
  desc: string;
  imageUrl: string;
  techConfidential: boolean;
  tech: { icon: string; techName: string }[];
  deliverables: string[];
  scopeHandled: string[];
}

export const portfolios: Portfolio[] = [
  {
    portfolioId: 1,
    name: 'My SIMETRI',
    desc: "Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as we've harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation ...",
    imageUrl: '/assets/images/home/portfolio/mySimetri.png',
    techConfidential: false,
    tech: [
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
    ],
    deliverables: [
      'Queue Management System',
      'Web Applications Solution',
      'Queue Management System',
      'Web Applications Solution',
    ],
    scopeHandled: ['Ideaton', 'Design', 'Implementation', 'Support'],
  },

  {
    portfolioId: 2,
    name: 'My SIMETRI',
    desc: "Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as we've harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation ...",
    imageUrl: '/assets/images/home/portfolio/mySimetri.png',
    techConfidential: false,
    tech: [
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
    ],
    deliverables: ['Queue Management System', 'Web Applications Solution'],
    scopeHandled: ['Ideaton', 'Design', 'Implementation', 'Support'],
  },

  {
    portfolioId: 3,
    name: 'My SIMETRI',
    desc: "Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as we've harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation ...",
    imageUrl: '/assets/images/home/portfolio/mySimetri.png',
    techConfidential: true,
    tech: [
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
    ],
    deliverables: ['Queue Management System', 'Web Applications Solution'],
    scopeHandled: ['Ideaton', 'Design', 'Implementation', 'Support'],
  },

  {
    portfolioId: 4,
    name: 'My SIMETRI',
    desc: "Embark on a journey of achievement with the My SIMETRI web application. Our success is woven into every line of code, as we've harnessed cutting-edge technology to create a seamless queue management system. From intuitive touch screen registration to swift queue number allocation ...",
    imageUrl: '/assets/images/home/portfolio/mySimetri.png',
    techConfidential: false,
    tech: [
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
      { icon: '/assets/images/home/tech/flutter.png', techName: 'Flutter' },
    ],
    deliverables: ['Queue Management System', 'Web Applications Solution'],
    scopeHandled: ['Ideaton', 'Design', 'Implementation', 'Support'],
  },
];
