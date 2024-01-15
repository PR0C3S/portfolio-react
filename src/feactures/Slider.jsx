import React from "react";

import { Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverFlow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverFlow, Pagination, Navigation } from "swiper";
import { Grid, Typography } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
export default function Slider() {
  return (
    <Grid>
      <Typography variant="h1">Projects</Typography>
      <Swiper>
        {itemData.map((image) => {
          <SwiperSlide key={image.img}>
            <ImageListItem>
              <img src={item.img} alt={item.title} loading="lazy" />
              <ImageListItemBar
                actionIcon={
                  <Tooltip title="GitHub">
                    <IconButton
                      target="_blank"
                      href="https://www.github.com/PR0C3S"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
            </ImageListItem>
          </SwiperSlide>;
        })}
      </Swiper>
    </Grid>
  );
}
