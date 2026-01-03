import { useState } from "react";
import "../styles/sections.css";
import toggleButton from "../assets/toggle-more.svg";

function EducationalExperience({
  schoolName,
  titleStudy,
  beginStudy,
  endStudy,
  isOpen,
  setSchoolName,
  setTitleStudy,
  setBeginStudy,
  setEndStudy,
  setIsOpen,
}) {
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function Content(isOpen) {
    if (isOpen) {
      return (
        <div className="content">
          <div>
            <label htmlFor="schoolName">Name of your school</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              onChange={(event) => setSchoolName(event.target.value)}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="titleStudy">Title of your study</label>
            <input
              type="text"
              id="titleStudy"
              name="titleStudy"
              value={titleStudy}
              onChange={(event) => setTitleStudy(event.target.value)}
            />
          </div>{" "}
          <div>
            <label htmlFor="beginStudy">Begin of your study</label>
            <input
              type="date"
              id="beginStudy"
              name="beginStudy"
              value={beginStudy}
              onChange={(event) => setBeginStudy(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="endStudy">End of your study</label>
            <input
              type="date"
              id="endStudy"
              name="endStudy"
              value={endStudy}
              onChange={(event) => setEndStudy(event.target.value)}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="section">
      <button className="section-head" onClick={toggleIsOpen}>
        <h1>Educational experience</h1>
        <img
          src={toggleButton}
          alt="toggle-button"
          className={`toggle-more-button ${isOpen ? "rotated" : ""}`}
        />
      </button>

      {Content(isOpen)}
    </div>
  );
}

export default EducationalExperience;
