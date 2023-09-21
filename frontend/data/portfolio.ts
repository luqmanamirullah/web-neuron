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
