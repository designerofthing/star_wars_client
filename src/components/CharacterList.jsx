import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterList = () => {
  const [names, setNames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [prevButtonShow, setPrevButtonShow] = useState("hidden");
  const [nextButtonShow, setNextButtonShow] = useState("visible");
  const [showInfo, setShowInfo] = useState("none");

  useEffect(() => {
    getNames();
  }, [pageNumber]);
  


  const getNames = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?page=${pageNumber}`
      );
      setNames(response.data.results);
      pageNumber > 1
        ? setPrevButtonShow("visible")
        : setPrevButtonShow("hidden");
      pageNumber >= 9
        ? setNextButtonShow("hidden")
        : setNextButtonShow("visible");
    } catch (error) {
      console.log(error);
    }
  };
  
  function getNextPage() {
    setPageNumber(pageNumber + 1);
    getNames();
  }

  function getPreviousPage() {
    setPageNumber(pageNumber - 1);
    getNames();
  }

  function displayInformation() {
    showInfo === "none" ? setShowInfo("inline") : setShowInfo("none");
  }
  

  let characterNames = names.map((name) => {
    return (
      <div>
        <p className="character-names" id={name.name} onClick={displayInformation}>
          {name.name} <br />
          <span className="character-info" id={name.name + "-info"} style={{ display: showInfo }}>
            Height: {name.height}, Weight in kgs: {name.mass}, Hair colour:{" "}
            {name.hair_color}, Skin colour: {name.skin_color}{" "}
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div id="character-list">{characterNames}</div>
      <button
        id="next-button"
        onClick={getNextPage}
        style={{ visibility: nextButtonShow }}
      >
        Next
      </button>
      <button
        id="previous-button"
        onClick={getPreviousPage}
        style={{ visibility: prevButtonShow }}
      >
        Previous
      </button>
    </div>
  );
};

export default CharacterList;
