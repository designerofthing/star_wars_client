import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [names, setNames] = useState([]);

  const getNames = async () => {
    try {
      const response = await axios.get("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people");
      setNames(response.data.results)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNames()
  }, [])

  let characterNames = names.map((name) => {
    return(
      <div>
        <p>{name.name}</p>
      </div>
    )

  })

  return <div>
    <header id="header">

    </header>
    <div id="main-container">
    <div id="character-list">
      {characterNames}
    </div>
    </div>
    <footer id="footer">
      
    </footer>
    </div>;
};

export default App;
