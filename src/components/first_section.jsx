import { useState } from "react";
import "../styles/first_section.css";
import toggleButton from "../assets/toggle-more.svg";

function General_info() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function Content(isOpen) {
    if (isOpen) {
      return (
        <div className="content">
          <div>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="email">Enter your Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="phoneNumber">Enter your phone number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <br />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="general-info section">
      <button className="section-head" onClick={toggleIsOpen}>
        <h1>General information</h1>
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

export default General_info;
