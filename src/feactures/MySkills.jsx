import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Toolbar from "../ui/Toolbar";

const skills = [
  {
    img: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    title: "Python",
  },
  {
    img: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    title: "Java",
  },
  {
    img: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    title: "Spring",
  },
  {
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    title: "React",
  },
  {
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    title: "HTML5",
  },
  {
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    title: "CSS3",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
    title: "Bootstrap",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
    title: "Window",
  },
  {
    img: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    title: "Linux",
  },
  {
    img: "https://www.vectorlogo.zone/logos/android/android-icon.svg",
    title: "Android",
  },
  {
    img: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    title: "Docker",
  },
  {
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    title: "Git",
  },
  {
    img: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
    title: "MYSQL",
  },
  {
    img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    title: "MongoDB",
  },
];
export default function MySkills() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <Divider>
          <Typography variant="h5">Languages and Tools</Typography>
        </Divider>
      </Grid>
      <Grid item container rowSpacing={3} justifyContent={"start"} xs={9}>
        {skills.map((skill) => {
          return (
            <Grid item xs={3} key={skill.title}>
              <Toolbar title={skill.title}>
                <Button variant="outlined">
                  <img
                    src={skill.img}
                    alt={skill.title}
                    height={64}
                    width={64}
                  />
                </Button>
              </Toolbar>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
