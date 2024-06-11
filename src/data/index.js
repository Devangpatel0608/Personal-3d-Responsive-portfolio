import {
  headphone,
  health,
  portfolioweb,
} from "../assets";
export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact Me",
  }

];

const experiences = [
  
];

const portfolio = [
  {
    name: "live Healthcare Website (4-Month Internship)",
    description:
      "A live healthcare website of doctor side with php, postman on www.meshdroid.com, with a backend in php, postman, github and a frontend in html, css, and javascript.",
    image: health,
  },
  {
    name: "Online Headphone Store - Frontend Development",
    description:
      "Created a visually appealing and user-centric online headphone store website. Implemented responsive design, intuitive navigation, and seamless checkout, enhancing the user experience. Demonstrated proficiency in frontend development and UI/UX principles.",
    image: headphone,
  },
  {
    name: "Personal 3D Portfolio Website",
    description:
      "Designed and developed a personal portfolio website using vite, javascript, React, Tailwind, Three.js, Framermotion, and deployed on Vercel. Demonstrated proficiency in frontend development, UI/UX principles, and 3D design.",
    image: portfolioweb,
  },
];

export const about = {
  name: "Devang Patel",
  description:
    "I'm Devang Patel, a coder, full-stack developer, and graphic designer from Gujarat. I graduated from PP Savani Surat after completing 12th grade and am currently pursuing B.Tech in Computer Science and Engineering at Uka Tarsadia University.",
  image: "\\src\\assets\\profile\\1.JPG",
};

export { experiences, portfolio };
