import React from "react";
import Joke from "../Joke";

export default function Index() {
  return (
    <div className="row">
      <div className="col-6">
        <Joke />
      </div>
      <div className="col-6">
        <Joke />
      </div>
    </div>
  );
}
