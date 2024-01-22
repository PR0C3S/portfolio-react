import { Grid } from "@mui/material";
import React from "react";

import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function TimeLine() {
  const color = "#1976d2";
  const schoolColor = "#e91e63";
  const starColor = "#10CC52";
  return (
    <Grid container mt={1} justifyContent={"center"}>
      <VerticalTimeline lineColor={color}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: color }}
          contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
          iconStyle={{ background: color }}
          date="2023 - present"
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate Programmer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">SML Dominicana</h4>
          <p>
            Development of labels using Microsoft SQL Server, Java, JIRA, Visual
            Basic, Adobe Illustrator.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: color }}
          contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
          iconStyle={{ background: schoolColor }}
          date="2023"
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            English by immersion
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ministerio De Educación Superior, Ciencia Y Tecnología, MESCYT
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: color }}
          contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
          iconStyle={{ background: color }}
          date="2022"
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intership as Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Edenorte Dominicana
          </h4>
          <p>
            Development of web applications using HTML, CSS, Javascript, Spring
            Boot, Bootstrap, Oracle Database
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: color }}
          contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
          iconStyle={{ background: schoolColor }}
          date="2018-2022"
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer and Systems Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pontificia Universidad Madre y Maestra, PUCMM
          </h4>
          <p>Degree academic average: 3.0</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: starColor }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Grid>
  );
}
