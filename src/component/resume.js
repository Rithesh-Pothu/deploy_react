import React from "react";
import data from "../data.json";

function Resume(props) {
  let profile = data.details[props.location.personcard.id];
  return (
    <div className="row">
      <h1>{profile.card.name}</h1>
    </div>
  );
}

export default Resume;
