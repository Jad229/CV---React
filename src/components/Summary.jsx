import { useState } from "react";

export default function Summary() {
  const [summary, setSummary] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen((prevState) => !prevState);
  }

  function handleChange(event) {
    const value = event.target.value;
    setSummary(value);
  }

  return (
    <section className="summary">
      <h3 className="summary--title">SUMMARY</h3>
      <p className="summary--content">{summary}</p>

      {isFormOpen && (
        <form className="edit--form">
          <textarea
            placeholder="Type summary here"
            name="summary"
            value={summary}
            onChange={handleChange}
          />

          <div className="edit--form-buttons">
            <button className="form-buttons">ADD</button>
            <button className="form-buttons" onClick={toggleForm}>
              CLOSE
            </button>
          </div>
        </form>
      )}

      {!isFormOpen && (
        <button className="edit--button" onClick={toggleForm}>
          EDIT
        </button>
      )}
    </section>
  );
}
