import React from "react";
import { Chip, Grid, Typography } from "@mui/material";

const mySkills = [
  {
    title: "PYTHON",
  },
  {
    title: "C#",
  },
  {
    title: "NODE JS",
  },
  {
    title: "EXPRESS",
  },
  {
    title: "JAVA",
  },
  {
    title: "SPRING",
  },
  {
    title: "REACT",
  },
  {
    title: "MATERIAL UI",
  },
  {
    title: "BOOTSTRAP",
  },
  {
    title: "TYPESCRIPT",
  },
  {
    title: "HTML5",
  },
  {
    title: "CSS3",
  },
  {
    title: "JAVASCRIPT",
  },
  {
    title: "POSTMAN",
  },
  {
    title: "SCRUM",
  },
  {
    title: "JIRA",
  },
  {
    title: "MAVEN",
  },
  {
    title: "REST API",
  },
  {
    title: "GRADLE",
  },
  {
    title: "WINDOW",
  },
  {
    title: "LINUX",
  },
  {
    title: "ANDROID",
  },
  {
    title: "DOCKER",
  },
  {
    title: "GIT",
  },
  {
    title: "GITHUB",
  },
  {
    title: "BITBUCKET",
  },
  {
    title: "MYSQL",
  },
  {
    title: "MICROSOFT SQL SERVER",
  },
  {
    title: "ORM",
  },
  {
    title: "JPA",
  },
  {
    title: "HIBERNATE",
  },
  {
    title: "MONGODB",
  },
  {
    title: "AWS",
  },
];

export default function Skills() {
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          Skills
        </Typography>
      </Grid>
      <Grid item container justifyContent={"center"} spacing={2}>
        {mySkills.map((skill) => {
          return (
            <Grid item key={skill.title}>
              <Chip
                label={skill.title}
                color="primary"
                variant="outlined"
                clickable
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
