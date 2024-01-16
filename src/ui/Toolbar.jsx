import { Toolbar as Tool } from "@mui/material";
import React from "react";

export default function Toolbar({ children, title }) {
  return <Tool title={title}>{children}</Tool>;
}
