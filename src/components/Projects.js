import React from "react";
import Thumbnail from "./Thumbnail.js";
import "../App.css";

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        a href="https://sc-progressive-budget.herokuapp.com/"
        image="../public/BudgetTracker.gif"
        title="Budget Tracker"
        category="Financial"
      />
      <Thumbnail
        a href="https://sc-progressive-budget.herokuapp.com/"
        image="../public/BudgetTracker.gif"
        title="Budget Tracker"
        category="Financial"
      />
      <Thumbnail
        a href="https://sc-progressive-budget.herokuapp.com/"
        image="../public/BudgetTracker.gif"
        title="Budget Tracker"
        category="Financial"
      />
      <Thumbnail
        a href="https://sc-progressive-budget.herokuapp.com/"
        image="../public/BudgetTracker.gif"
        title="Budget Tracker"
        category="Financial"
      />
    </div>
  )
}

export default Projects;
