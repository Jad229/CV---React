import { useState } from "react";
import EditForm from "./EditForm";

export default function Education() {
  const [inputs, setInputs] = useState([
    {
      value: "Awesome Degree",
      type: "text",
      name: "degree",
    },
    {
      value: "May 2023",
      type: "text",
      name: "date",
    },
    {
      value: "NJIT",
      type: "text",
      name: "university",
    },
    {
      value: "Newark, NJ",
      type: "text",
      name: "location",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, value } : input
      )
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }

  function toggleForm() {
    setIsFormOpen((prevState) => !prevState);
  }
  return (
    <section className="education">
      <h3 className="education--title">EDUCATION</h3>
      <div className="education--degree">
        <h4 className="education--degree-name">
          {inputs.find((input) => input.name === "degree").value}
        </h4>
        <h4 className="education--degree-date">
          {inputs.find((input) => input.name === "date").value}
        </h4>
      </div>
      <div className="education--university">
        <h4 className="education--university-name">
          {inputs.find((input) => input.name === "university").value}
        </h4>
        <h4 className="education--university-location">
          {inputs.find((input) => input.name === "location").value}
        </h4>
      </div>
      <ul className="education--details">
        <li>
          <span>GPA: </span>
        </li>
        <li>
          <span>Clubs/Orgs</span>
        </li>
        <li>
          <span>Awards</span>
        </li>
      </ul>

      {isFormOpen && (
        <EditForm
          inputs={inputs}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          toggleForm={toggleForm}
        />
      )}

      {!isFormOpen && (
        <button className="edit--button" onClick={toggleForm}>
          EDIT
        </button>
      )}
    </section>
  );
}
