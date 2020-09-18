import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [names, setNames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const currentDate = new Date();
  const date = currentDate.getFullYear();

 function getNextPage () {
  setPageNumber(pageNumber+1)
  getNames()
}

  const getNames = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=${pageNumber}`
      );
      setNames(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNames();
  }, []);

  let characterNames = names.map((name) => {
    return (
      <div>
        <p>{name.name}</p>
      </div>
    );
  });

  return (
    <div>
      <header id="header">
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
          alt="Star Wars"
        />
        View and search for your favourite Star Wars characters
      </header>
      <div id="main-container">
        <div id="character-list">{characterNames}</div>
        <button id="next-button" onClick={getNextPage}>
          Next
        </button>
      </div>
      <footer id="footer">
        <p id="copyright">Created by Steve Watson. Copyright {date}.</p>
      </footer>
    </div>
  );
};

export default App;
