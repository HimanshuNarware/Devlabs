import { HiShieldCheck } from 'react-icons/hi';
import { MdCancel, MdAnalytics } from 'react-icons/md';
const data = [
  {
    icon: <HiShieldCheck />,
    heading: 'What is DevLabs Store?',
    detail:
      'DevLabs Store is an online marketplace that offers a wide range of AI and machine learning models, tools, and services. It provides a platform for developers, data scientists, and businesses to buy and sell AI solutions.',
  },
  {
    icon: <MdAnalytics />,
    heading: 'How do I get a new tool?',
    detail:
      'Each tool has a link that you can click to access it and also add it to your bookmarks.',
  },
  {
    icon: <MdCancel />,
    heading: 'How do I get started with contributing to DevLabs?',
    detail:
      "To contribute, go to the GitHub repository, create a new repository, clone the project, and start contributing",
  },
];
export default data;