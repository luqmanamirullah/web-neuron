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
