import React from "react";
import Skirt from "./Skirt";
import SkirtColor from "./SkirtColor";

export default function ToggleSkirtColor(props) {
  const colored = props.colored;
  if (!colored) {
    return <Skirt />;
  }
  return <SkirtColor />;
}
