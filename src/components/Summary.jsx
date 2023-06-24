import { useState } from "react";
import EditForm from "./EditForm";

export default function Summary() {
  const [inputs, setInputs] = useState([
    {
      value: "",
      type: "textarea",
      name: "summary",
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
    <section className="summary">
      <h3 className="summary--title">SUMMARY</h3>
      <p className="summary--content">{inputs[0].value}</p>

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
