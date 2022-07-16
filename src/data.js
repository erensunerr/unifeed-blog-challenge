import Article1Img from './assets/Article 1 Image.png';
import Article2Img from './assets/Article 2 Image.png';
import Article3Img from './assets/Article 3 Image.png';
import MainArticleImg from './assets/Main Article Image.png';

import Avatar1 from './assets/User Avatar-1.png';
import Avatar2 from './assets/User Avatar-2.png';
import Avatar3 from './assets/User Avatar-3.png';
import MainAvatar from './assets/User Avatar.png';


export const articles = [
    {
      title: "Weekly Newsletter: Tweets for Higher Engagements",
      description: "In this weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on twitter.",
      imgSrc: MainArticleImg,
      author: {
        name: 'Jessica Andrews',
        title: 'Content Manager',
        imgSrc: MainAvatar,

      }
    },
    {
      title: "7 Tips for Organic Traffic",
      description: "From SEO to integrating with Paid Advertising, this article covers it all.",
      imgSrc: Article1Img,
      author: {
        name: "Spencer David",
        title: "SEO Specialist",
        imgSrc: Avatar1,
      }
    },
    {
      title: "How to Start Your Own Business",
      description: "Starting your own business in 2021 has never been easier.",
      imgSrc: Article2Img,
      author: {
        name: "Sara Frey",
        title: "Business Leader",
        imgSrc: Avatar2,
      }
    },
    {
      title: "5 Tips for Better Branding",
      description: "From SEO to integrating with Paid Advertising, this article covers it all.",
      imgSrc: Article3Img,
      author: {
        name: "David Suns",
        title: "Brand Manager",
        imgSrc: Avatar3,
      }
    },
];
