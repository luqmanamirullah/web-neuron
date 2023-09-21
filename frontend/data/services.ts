interface Service {
  name: string;
  desc: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    name: 'Web Application Solution',
    desc: "Experience the transformation of your digital concepts into captivating reality with NeuronWorks' innovative web application solutions. From initial ideation to flawless execution, we specialize in crafting user experiences that are both engaging and functional. Elevate your online footprint with our responsive, elegant, and feature-rich web applications, designed to enhance your digital presence and meet diverse user needs.",
    imageUrl: '/assets/images/home/services/webApp.jpg',
  },

  {
    name: 'Mobile Application Solution',
    desc: "Reach your customers where they are with NeuronWorks' groundbreaking mobile application solutions. Embrace the mobile era by leveraging our expertise in optimizing solutions for various platforms. Our designs blend aesthetic appeal with advanced functionality, ensuring your mobile app becomes an irresistible magnet for user engagement.",
    imageUrl: '/assets/images/home/services/mobileApp.png',
  },

  {
    name: 'Customer Relationship Management',
    desc: "Forge lasting customer relationships with NeuronWorks' innovative CRM Applications. Deliver personalized experiences and superior service through our solutions. From tracking interactions to analyzing customer behavior, we assist you in nurturing robust customer loyalty and engagement.",
    imageUrl: '/assets/images/home/services/customerRelationship.png',
  },
];
