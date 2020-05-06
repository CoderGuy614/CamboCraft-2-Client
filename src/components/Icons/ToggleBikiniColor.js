import React from "react";
import Bikini from "./Bikini";
import BikiniColor from "./BikiniColor";

export default function ToggleBikiniColor(props) {
  const colored = props.colored;
  if (!colored) {
    return <Bikini />;
  }
  return <BikiniColor />;
}
