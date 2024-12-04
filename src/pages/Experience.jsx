import React from "react";
import { Grid, Typography } from "@mui/material";
import InformationAsList from "../feactures/InformationAsList";

const experienceList = [
  {
    companyLogo:
      "https://www.sml.com/wp-content/uploads/2023/02/cropped-Favicon.png",
    companyName: "SML",
    position: "Associate Programmer",
    location: "USA",
    date: "January 2023 - Currently ",
    responsibilities: [
      "Developed IT solutions as a member of the eCommerce platform team, written in Java, aimed at improving system performance and functionalities, and enhancing user experience.",
      "Implemented new features for specific products and markets using Java, contributing to product enhancements and market adaptability.",
      "Designed, managed, and optimized databases using Microsoft SQL Server, ensuring efficient data recovery.",
      "Improved solutions and bug fixes, optimized existing code for improved efficiency and stability, achieving a 10% error resolution rate.",
      "Migrated existing software to an updated version of Java, enhancing performance, security, and scalability.",
      "Executed CI/CD practices to improve software delivery efficiency, reducing errors and deployment times by more than 80%.",
    ],
  },
  {
    companyLogo:
      "https://be.nortic.ogtic.gob.do/organizationsImages/EDENORTE.png",
    companyName: "EDENORTE",
    position: "Full Stack Developer",
    location: "Santiago, Dominican Republic",
    date: "July 2022 - October 2022",
    responsibilities: [
      "Designed, implemented, and maintained projects utilizing Java, SQL, and GitHub.",
      "Improved an internal application to enhance team project access and management, reducing project access time by 70%.",
      "Applied CI/CD practices to enhance software delivery efficiency, reducing errors and delivery times.",
      "Optimized and improved existing Java code.",
      "Designed and applied databases and managed library integration and migration in programs.",
    ],
  },
];
export default function Experience() {
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          Experience
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        {experienceList.map((experience) => (
          <Grid item xs={12} key={experience.companyName}>
            <InformationAsList data={experience} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
