// general
import React from "react";
// local
import Slides from "./Slides";
import Title from "./Title";

export default function Categories() {
  return (
    <>
      <Title title="Frutas" emoji="🍉" />
      <Slides category="FRUT" />

      <Title title="Hortalizas" emoji="🥕" />
      <Slides category="HORT" />
    </>
  );
}
