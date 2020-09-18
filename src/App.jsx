import React from "react";
import "./App.css";
import Toggle from "./components/Toggle";

const App = () => {
  const currentDate = new Date();
  const date = currentDate.getFullYear();

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
        <Toggle />
      </div>
      <footer id="footer">
        <p id="copyright">Created by Steve Watson. Copyright {date}.</p>
      </footer>
    </div>
  );
};

export default App;
