import React from "react";

import { Grid, Typography } from "@mui/material";

import ProjectData from "../feactures/ProjectData";
const projectList = [
  {
    title: "Restaurant App",
    date: "November 2024 - Currently",
    description:
      "An all-in-one application designed to optimize restaurant management. It allows the issuance of fiscal invoices, control and tracking of product inventory, efficient table management, monitoring of products sold both via delivery and locally, and provides a real-time view of food preparation. Additionally, it includes control over operational expenses. This application streamlines the daily operations of the restaurant, improving efficiency and accuracy in all areas, from customer service to internal management.",
    skills: ["MONGO", "EXPRESS", "REACT", "NODE"],
    visit: "",
    code: "",
  },
  {
    title: "Blind Assistance Device",
    date: "September 2022 - December 2022",
    description:
      "An assistive device designed to help visually impaired individuals. It uses advanced technologies such as artificial intelligence, computer vision with YOLOv5, and optical character recognition (OCR) to identify obstacles and provide relevant information in real time. Additionally, the device can detect Dominican bills and sum them up, enhancing the users' mobility, autonomy, and money management.",
    skills: ["PYTHON", "AI", "YOLOv5", "OCR"],
    visit: "https://www.youtube.com/watch?v=A6SqTY28ODY",
    code: "https://github.com/PR0C3S/Asistentes-Invidentes-Fork",
  },
  {
    title: "Weather App",
    date: "September 2023 - September 2023",
    description:
      "An application that provides updated weather information. Users can check weather conditions such as temperature, humidity, wind speed, and other relevant variables for any location around the world.",
    skills: ["REACT", "AXIOS", "BOOTSTRAP"],
    visit: "https://weatherapp-johnpena.netlify.app",
    code: "https://github.com/PR0C3S/React_Course_2023/tree/main/challenge-weather-app",
  },
  {
    title: "To-Do App",
    date: "September 2023 - September 2023",
    description:
      "An intuitive application designed to enhance productivity and personal organization. This project allows users to create, manage, and prioritize tasks efficiently.",
    skills: ["REACT", "BOOTSTRAP"],
    visit: "https://todoapp-johnpena.netlify.app",
    code: "https://github.com/PR0C3S/React_Course_2023/tree/main/challenge-todo-list",
  },
  {
    title: "Date Calculator",
    date: "January 2023 - January 2023",
    description:
      "A versatile tool designed to perform accurate calculations related to dates. Ideal for managing deadlines, calculating differences between dates, determining the time left until a birthday, or calculating a person’s exact age.",
    skills: ["REACT", "MATERIAL UI"],
    visit: "https://datecalculator-johnpena.netlify.app",
    code: "https://github.com/PR0C3S/date-calculator-react",
  },
  {
    title: "The React Quiz",
    date: "January 2023 - January 2023",
    description:
      "An interactive application designed to help users learn and practice key concepts of React.js through a quiz.",
    skills: ["REACT", "MATERIAL UI"],
    visit: "https://thereactquiz-johnpena.netlify.app",
    code: "https://github.com/PR0C3S/React_Course_2023/tree/main/10-react-quiz",
  },
];

export default function Projects() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          My Projects
        </Typography>
        <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
          Take a look at my latest work
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          I’ve worked on a variety of projects, ranging from simple websites to
          complex web applications. Here are some of my favorites.
        </Typography>
      </Grid>

      <Grid item container spacing={2}>
        {projectList.map((project) => {
          return (
            <Grid item key={project.title} xs={12} md={6}>
              <ProjectData data={project} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
