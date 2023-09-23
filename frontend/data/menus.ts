export interface Menu {
  label: string;
  type: 'link' | 'dropdown' | 'button' | 'lang';
  link?: string;
  subLabel?: string;
  children?: Menu[];
}

const menus: Menu[] = [
  {
    label: 'Home',
    type: 'link',
    link: '/',
  },
  {
    label: 'About',
    type: 'link',
    link: '/about',
  },
  {
    label: 'Services',
    type: 'link',
    link: '/services',
    children: [
      {
        label: 'Web Application',
        type: 'link',
        link: '/services/web-application',
      },
      {
        label: 'Mobile Application',
        type: 'link',
        link: '/services/mobile-application',
      },
      {
        label: 'System Integration',
        type: 'link',
        link: '/services/system-integration',
      },
      {
        label: 'Workflow Management System',
        type: 'link',
        link: '/services/workflow-management-system',
      },
      {
        label: 'Bussines Intellgence',
        type: 'link',
        link: '/services/bussines-intellgence',
      },
      {
        label: 'CRM',
        type: 'link',
        link: '/services/crm',
      },
    ],
  },
  {
    label: 'Product',
    type: 'dropdown',
    children: [
      {
        label: 'DOOR HRMIS',
        subLabel: 'HR apps to manage your resource easily',
        type: 'link',
        link: '/door',
      },
      {
        label: 'Matris',
        subLabel: 'Manage Your queue problem sistematically',
        type: 'link',
        link: '/matris',
      },
      {
        label: 'SMS MERDEKA',
        subLabel: 'Blasting your SMS easily',
        type: 'link',
        link: '/sms-merdeka',
      },
      {
        label: 'ISSUKU',
        subLabel: 'Collect your survey data so fast and easy',
        type: 'link',
        link: '/issuku',
      },
      {
        label: 'SUSTERS',
        subLabel: 'Manage your hospital management easily',
        type: 'link',
        link: '/susters',
      },
      {
        label: 'NEMO',
        subLabel: 'Send message to your customer easily',
        type: 'link',
        link: '/nemo',
      },
    ],
  },
  {
    label: 'Blog',
    type: 'link',
    link: '/blogs',
  },
  {
    label: 'Careers',
    type: 'link',
    link: '/careers',
  },
  {
    label: 'EN',
    type: 'lang',
    children: [
      {
        label: 'EN',
        type: 'link',
        link: '/en',
      },
      {
        label: 'ID',
        type: 'link',
        link: '/id',
      },
    ],
  },
  {
    label: 'Contact Us',
    type: 'button',
    link: '/contact-us',
  },
];

export default menus;
