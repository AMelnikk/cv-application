import { useState } from "react";
import "../styles/sections.css";
import toggleButton from "../assets/toggle-more.svg";

function PracticalExperience() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [beginWork, setBeginWork] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function Content(isOpen) {
    if (isOpen) {
      return (
        <div className="content">
          <div>
            <label htmlFor="companyName">Name of your companyName</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="positionTitle">Title of your position</label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={positionTitle}
              onChange={(event) => setPositionTitle(event.target.value)}
            />
          </div>{" "}
          <div>
            <label htmlFor="responsibilities">You main responsibilities</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={responsibilities}
              onChange={(event) => setResponsibilities(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="beginWork">Date of the beginning of you work</label>
            <input
              type="date"
              id="beginWork"
              name="beginWork"
              value={beginWork}
              onChange={(event) => setBeginWork(event.target.value)}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="section">
      <button className="section-head" onClick={toggleIsOpen}>
        <h1>Practical experience</h1>
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

export default PracticalExperience;
