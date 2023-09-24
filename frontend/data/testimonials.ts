interface Testimonial {
  quote: string;
  imageUrl: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Delighted with Neuronworks! Timely delivery, strong tech support, clear communication. They're more than developers – trusted consultants who understand our needs",
    imageUrl: '/assets/images/home/reviewer.jpg',
    name: 'Tennie Chrisantiana',
    role: 'Senior Engineer Billing & Reassurance at Telin Malaysia',
  },

  {
    quote:
      "Delighted with Neuronworks! Timely delivery, strong tech support, clear communication. They're more than developers",
    imageUrl: '/assets/images/home/reviewer.jpg',
    name: 'Tennie Chrisantiana',
    role: 'Senior Engineer Billing & Reassurance at Telin Malaysia',
  },

  {
    quote: 'Delighted with Neuronworks! Timely delivery',
    imageUrl: '/assets/images/home/reviewer.jpg',
    name: 'Tennie Chrisantiana',
    role: 'Senior Engineer Billing & Reassurance at Telin Malaysia',
  },
];
