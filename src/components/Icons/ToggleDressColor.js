import React from "react";
import Dress from "./Dress";
import DressColor from "./DressColor";

export default function ToggleDressColor(props) {
  const colored = props.colored;
  if (!colored) {
    return <Dress />;
  }
  return <DressColor />;
}
