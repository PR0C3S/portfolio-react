import React from "react";
import { Grid, Typography } from "@mui/material";
import InformationAsList from "../feactures/InformationAsList";

const educationList = [
  {
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo_MESCyT_%28RD%29.png/1200px-Logo_MESCyT_%28RD%29.png",
    companyName: "MINISTERIO DE EDUCACION SUPERIOR, CIENCIA Y TECNOLOGIA",
    position: "English immersion",
    location: "Santiago, Dominican Republic",
    date: "2023",
  },
  {
    companyLogo:
      "https://www.pucmm.edu.do/somos/PublishingImages/conoce-pucmm/logo.jpg",
    companyName: "PONTIFICIA UNIVERSIDAD CATOLICA MADRE Y MAESTRA",
    position: "Software Engineer",
    location: "Santiago, Dominican Republic",
    date: "2018 - 2022",
  },
  {
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CysDy6u7TLxFKS-tWEtBG-xWQef-tKgDtQ&s",
    companyName: "INSTITUTO TECNOLOGICO MEXICO",
    position: "Electronics Technician",
    location: "Santiago, Dominican Republic",
    date: "2018",
  },
];
export default function Education() {
  return (
    <Grid container justifyContent={"center"} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          Education
        </Typography>
      </Grid>
      <Grid item container spacing={2}>
        {educationList.map((experience) => (
          <Grid item xs={12} key={experience.companyName}>
            <InformationAsList data={experience} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
