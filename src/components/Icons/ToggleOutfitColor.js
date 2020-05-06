import React from "react";
import Outfit from "./Outfit";
import OutfitColor from "./OutfitColor";

export default function ToggleOutfitColor(props) {
  const colored = props.colored;
  if (!colored) {
    return <Outfit />;
  }
  return <OutfitColor />;
}
