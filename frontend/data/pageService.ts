interface PageService {
  display: string;
  subtitle: string;
  service: Headline;
  technology: Headline;
  methodology: Headline;
}

interface Headline {
  title: string;
  subtitle: string;
}

const pageService: PageService = {
  display: 'We Create Reliable Software',
  subtitle:
    ' Embark on a journey of boundless possibilities, where the seamless integration of cutting-edge Information Technology solutions transforms your daily tasks into effortless accomplishments.',
  service: {
    title: 'Elevate Your Business with Superior Solutions',
    subtitle: 'Our Services',
  },
  technology: {
    title:
      'Our team thrives on the pulse of the latest tech and best practices, crafting digital solutions that transcend the ordinary',
    subtitle: 'Technology We Work On',
  },
  methodology: {
    title: 'Crafting Success with Precision',
    subtitle: 'Our Methodology',
  },
};

export default pageService;
