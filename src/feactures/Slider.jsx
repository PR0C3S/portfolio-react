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
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { projects } from "../utils/Constants";
import { useTheme } from "@emotion/react";
import Toolbar from "../ui/Toolbar";

export default function Slider() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between("xs", "md"));
  return (
    <Grid container mt={1}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={matches ? 1 : 3}
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
        {projects.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <Grid item>
                <Card sx={{ height: 450 }}>
                  {item?.isVideo === true ? (
                    <CardMedia
                      component="video"
                      image={item.img}
                      controls
                      title={item.title}
                      sx={{ height: 250 }}
                    />
                  ) : (
                    <CardMedia
                      image={item.img}
                      title={item.title}
                      sx={{ height: 250 }}
                    />
                  )}

                  <CardContent>
                    <Grid
                      item
                      container
                      justifyContent={"center"}
                      xs={12}
                      spacing={1}
                      mt={1}
                    >
                      <Grid item xs={8}>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid item container justifyContent={"right"} xs={4}>
                        <Tooltip title="View code">
                          <IconButton target="_blank" href={item.github}>
                            <GitHubIcon />
                          </IconButton>
                        </Tooltip>
                        {item?.demo && (
                          <Tooltip title="Live Demo">
                            <IconButton target="_blank" href={item.demo}>
                              <OpenInNewIcon />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      justifyContent={"center"}
                      xs={12}
                      spacing={1}
                      mt={1}
                    >
                      {item.skills.map((skill) => (
                        <Grid item key={`${item.title}-${skill.name}`}>
                          <Toolbar title={skill.name}>
                            <Chip
                              avatar={
                                <Avatar alt={skill.name} src={skill.logo} />
                              }
                              label={skill.name}
                            />
                          </Toolbar>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
