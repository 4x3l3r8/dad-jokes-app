import React from "react";
import Navbar from "./components/layout/Navbar";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto">
        <Joke />
      </div>
      <h1>Let's get started</h1>
    </div>
  );
}

export default App;
