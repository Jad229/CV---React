import { useState } from "react";
import EditForm from "./EditForm";

export default function Education() {
  const [inputs, setInputs] = useState([
    {
      value: "",
      type: "text",
      name: "degree",
    },
    {
      value: "",
      type: "text",
      name: "date",
    },
    {
      value: "",
      type: "text",
      name: "university",
    },
    {
      value: "",
      type: "text",
      name: "location",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      return prevInputs.map((input) =>
        input.name === name
          ? {
              ...input,
              [name]: value,
            }
          : input
      );
    });
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
        <h4 className="education--degree-name">[Degree Here]</h4>
        <h4 className="education--degree-date">[Date]</h4>
      </div>
      <div className="education--university">
        <h4 className="education--university-name">[University here]</h4>
        <h4 className="education--university-location">
          [University Location here]
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
