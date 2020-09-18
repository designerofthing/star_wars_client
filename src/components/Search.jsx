import React, { useState } from 'react'
import axios from "axios";

const Search = () => {
  const [ search, setSearch ] = useState('')
  const [ results, setResults ] = useState([])
  const [showInfo, setShowInfo] = useState("none");

  
  const searchResponse = async () => {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/?search=${search}`
      );
      setResults(response.data.results);
      
    } catch (error) {
      console.log(error);
    }
  };

  let setValue = (event) => {
    setSearch(event.target.value)
  }

  function displayInformation() {
    showInfo === "none" ? setShowInfo("inline") : setShowInfo("none");
  }

  let characters = results.map((name) => {
    return (
      <div >
        <p className="search-results" id={name.name} onClick={displayInformation}>
          {name.name} <br />
          <span className="search-results-info" id={name.name + "-info"} style={{ display: showInfo }}>
            Height: {name.height}, Weight in kgs: {name.mass}, Hair colour:{" "}
            {name.hair_color}, Skin colour: {name.skin_color}{" "}
          </span>
        </p>
      </div>
    );
  });
  
  return (
    <div id="search">
        <input id="search-input" onChange={e => setValue(e)} type="text" name="search" placeholder="Input Character's Name">
        </input>  
        <button id="search-button" onClick={searchResponse} name="search">Search</button>  
  <p  >{characters}</p>
    </div>
  )
}

export default Search
