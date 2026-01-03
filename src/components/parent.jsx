import { useState } from "react";
import General_info from "./first_section";
import EducationalExperience from "./second_section";
import PracticalExperience from "./third_section";

function Parent() {
  // First section
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  // Second section
  const [schoolName, setSchoolName] = useState("");
  const [titleStudy, setTitleStudy] = useState("");
  const [beginStudy, setBeginStudy] = useState("");
  const [endStudy, setEndStudy] = useState("");
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  // Third section
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [beginWork, setBeginWork] = useState("");
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  // Other variables
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleIsSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  function Content() {
    if (isSubmitted) {
      return (
        <>
          <h1>CV document</h1>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>Number: {number}</h3>
          <h3>Name of the school: {schoolName}</h3>
          <h3>Name of the study: {titleStudy}</h3>
          <h3>
            Date of the study: {beginStudy} - {endStudy}
          </h3>
          <h3>Name of the company: {companyName}</h3>
          <h3>Name of the position in that company: {positionTitle}</h3>
          <h3>Responsibilities: {responsibilities}</h3>
          <h3>Date of the begin working in that company: {beginWork}</h3>
          <button onClick={toggleIsSubmitted}>Edit</button>
        </>
      );
    } else {
      return (
        <>
          <General_info
            name={name}
            email={email}
            number={number}
            isOpen={isFirstOpen}
            setName={setName}
            setEmail={setEmail}
            setNumber={setNumber}
            setIsOpen={setIsFirstOpen}
          />
          <EducationalExperience
            schoolName={schoolName}
            titleStudy={titleStudy}
            beginStudy={beginStudy}
            endStudy={endStudy}
            isOpen={isSecondOpen}
            setSchoolName={setSchoolName}
            setTitleStudy={setTitleStudy}
            setBeginStudy={setBeginStudy}
            setEndStudy={setEndStudy}
            setIsOpen={setIsSecondOpen}
          />
          <PracticalExperience
            companyName={companyName}
            positionTitle={positionTitle}
            responsibilities={responsibilities}
            beginWork={beginWork}
            isOpen={isThirdOpen}
            setCompanyName={setCompanyName}
            setPositionTitle={setPositionTitle}
            setResponsibilities={setResponsibilities}
            setBeginWork={setBeginWork}
            setIsOpen={setIsThirdOpen}
          />
          <button onClick={toggleIsSubmitted}>Submit</button>
        </>
      );
    }
  }

  return Content();
}

export default Parent;
