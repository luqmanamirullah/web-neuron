interface Service {
  id: number;
  name: string;
  desc: string;
  img: string;
  technologies: Technology[];
  keyFeature: string[];
}

interface Technology {
  id: number;
  name: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Web Application',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 3,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 4,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 5,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 6,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 7,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 8,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 9,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 10,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 11,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 12,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 13,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 14,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 15,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
  {
    id: 2,
    name: 'Mobile Application',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
  {
    id: 3,
    name: 'System Integrator',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
  {
    id: 4,
    name: 'Workflow Management System',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
  {
    id: 5,
    name: 'CRM',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
  {
    id: 6,
    name: 'Business Intelligence',
    desc: 'Experience the transformation of your digital concepts into captivating reality with NeuronWorks innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs',
    img: '/assets/images/www.png',
    technologies: [
      {
        id: 1,
        name: 'React',
        icon: '/assets/images/react.png',
      },
      {
        id: 2,
        name: 'Angular',
        icon: '/assets/images/angular.png',
      },
      {
        id: 3,
        name: 'Vue',
        icon: '/assets/images/vue.png',
      },
      {
        id: 4,
        name: 'Node',
        icon: '/assets/images/node.png',
      },
    ],
    keyFeature: [
      'Web Application',
      'E-Commerce',
      'CMS',
      'Web Portal',
      'Web Dashboard',
      'Web API',
    ],
  },
];

export default services;
