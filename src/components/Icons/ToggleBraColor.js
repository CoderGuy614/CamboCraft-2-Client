import React from "react";
import Bra from "./Bra";
import BraColor from "./BraColor";

export default function ToggleBraColor(props) {
  const colored = props.colored;
  if (!colored) {
    return <Bra />;
  }
  return <BraColor />;
}
