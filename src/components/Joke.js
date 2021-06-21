import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Joke() {
  const [joke, setJoke] = useState("");

  const loadContent = () => {
    axios
      .get("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } })
      .then((res) => setJoke(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadContent;
  }, []);

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Dad Joke</div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text">{joke.joke}</p>
          <a href="#" onClick={loadContent} className="btn btn-primary">
            Get Another Joke
          </a>
        </div>
      </div>
    </div>
  );
}
