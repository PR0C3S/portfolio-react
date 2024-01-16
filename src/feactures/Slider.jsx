import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents exceptAntarctica",
  },
];
export default function Slider() {
  return (
    <Grid>
      <Divider textAlign="center">
        <Typography variant="h5">Latest projects</Typography>
      </Divider>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={30}
      >
        {itemData.map((image) => {
          return (
            <Grid mb={2} key={image.img}>
              <SwiperSlide>
                <Card>
                  <CardMedia
                    image={image.img}
                    title={image.title}
                    sx={{ height: 250 }}
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={8}>
                        <Typography gutterBottom variant="h5" component="div">
                          {image.title}
                        </Typography>
                      </Grid>
                      <Grid container justifyContent={"right"} xs={4}>
                        <Tooltip title="View code">
                          <IconButton
                            target="_blank"
                            href="https://www.github.com/PR0C3S"
                          >
                            <GitHubIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Visit">
                          <IconButton
                            target="_blank"
                            href="https://www.github.com/PR0C3S"
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>

                    <Typography variant="body2" color="text.secondary">
                      {image.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            </Grid>
          );
        })}
      </Swiper>
    </Grid>
  );
}
