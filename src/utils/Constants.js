import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import sqlserver from "../assets/sql-server.svg";
import typeorm from "../assets/typeorm.svg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import postman from "../assets/postman.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import html5 from "../assets/html5.svg";
import css from "../assets/css.svg";
import materialui from "../assets/Material UI.svg";
import bootstrap from "../assets/Bootstrap.svg";
import linux from "../assets/linux.svg";
import android from "../assets/android-icon.svg";
import git from "../assets/git.svg";
import docker from "../assets/docker.svg";
import aws from "../assets/aws.svg";
import jira from "../assets/jira.svg";
import tailwind from "../assets/tailwindcss.svg";
import ai from "../assets/ai.svg";

export const name = "John Peña";
export const positions = ["System Engineer", "Full Stack Developer"];
export const description =
  "A passionate fullstack developer from Dominican Republic 🇩🇴, I am a technology lover who is constantly looking for information, I really like sports and spending time with my friends.";

export const mail = "johnhpena@gmail.com";
export const skills = [
  {
    img: python,
    title: "Python",
    type: "language",
  },
  {
    img: java,
    title: "Java",
    type: "language",
  },
  {
    img: spring,
    title: "Spring",
    type: "framework",
  },
  {
    img: react,
    title: "React",
    type: "library",
  },
  {
    img: html5,
    title: "HTML",
    type: "language",
  },
  {
    img: css,
    title: "CSS",
    type: "language",
  },
  {
    img: javascript,
    title: "Javascript",
    type: "language",
  },
  {
    img: postman,
    title: "Postman",
    type: "software",
  },
  {
    img: materialui,
    title: "Material UI",
    type: "library",
  },
  {
    img: bootstrap,
    title: "Bootstrap",
    type: "library",
  },

  {
    img: linux,
    title: "Linux",
    type: "OS",
  },
  {
    img: android,
    title: "Android",
    type: "OS",
  },
  {
    img: git,
    title: "Git",
    type: "software",
  },

  {
    img: docker,
    title: "Docker",
    type: "software",
  },
  {
    img: jira,
    title: "Jira",
    type: "software",
  },
  {
    img: aws,
    title: "Amazon Web Services",
    type: "cloud",
  },
  {
    img: mysql,
    title: "MySQL",
    type: "database",
  },

  {
    img: sqlserver,
    title: "Microsoft SQL Server",
    type: "database",
  },
  {
    img: mongodb,
    title: "MongoDB",
    type: "database",
  },
  {
    img: typeorm,
    title: "ORM",
    type: "database",
  },
];

export const year = new Date().getFullYear();

export const projects = [
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/taMdTk-fgZU",
    title: "Blind Assistance Device",
    github: "https://github.com/PR0C3S/Asistentes-Invidentes-Fork",
    skills: [
      { name: "Python", logo: python },
      { name: "AI", logo: ai },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/ZOPsV8hz_rQ",
    title: "The React Quiz",
    github:
      "https://github.com/PR0C3S/React_Course_2023/tree/main/10-react-quiz",
    demo: "https://thereactquiz-johnpena.netlify.app",
    skills: [
      { name: "React", logo: react },
      { name: "Material UI", logo: materialui },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/vhKe-sl1ZLA",
    title: "Fast React App",
    github:
      "https://github.com/PR0C3S/React_Course_2023/tree/main/16-fast-react-pizza",
    demo: "https://pizzaapp-johnpena.netlify.app/",
    skills: [
      { name: "React", logo: react },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/kR5vaUHg60o",
    title: "Tic Tac Toe",
    github: "https://github.com/PR0C3S/Tic-Tac-Toe-in-React-JS",
    demo: "https://tic-tac-toe-johnpena.netlify.app",
    skills: [
      { name: "React", logo: react },
      { name: "Material UI", logo: materialui },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/v9mVqbVIVT0",
    title: "Todo List ",
    github:
      "https://github.com/PR0C3S/React_Course_2023/tree/main/challenge-todo-list",
    demo: "https://todoapp-johnpena.netlify.app/",
    skills: [
      { name: "React", logo: react },
      { name: "Bootstrap", logo: bootstrap },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/toYUHraM2M8",
    title: "Weather APP",
    github:
      "https://github.com/PR0C3S/React_Course_2023/tree/main/challenge-weather-app",
    demo: "https://weatherapp-johnpena.netlify.app",
    skills: [
      { name: "React", logo: react },
      { name: "Bootstrap", logo: bootstrap },
    ],
  },
  {
    isVideo: true,
    img: "https://www.youtube.com/embed/DZcMGeerW6k",
    title: "Date Calculator",
    github: "https://github.com/PR0C3S/date-calculator-react",
    demo: "https://datecalculator-johnpena.netlify.app",
    skills: [
      { name: "React", logo: react },
      { name: "Material ui", logo: materialui },
    ],
  },
];
