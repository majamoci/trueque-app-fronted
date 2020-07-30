import React from "react";
import Slides from "./Slides";

export default function Categories() {
  return (
    <>
      <h2>Frutas</h2>
      <Slides category="FRUT" />
      <h2>Hortalizas</h2>
      <Slides category="HORT" />
    </>
  )
}
