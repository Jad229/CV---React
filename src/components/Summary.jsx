import { useState } from "react";

export default function Summary() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen((prevState) => !prevState);
  }

  return (
    <section className="summary">
      <h3 className="summary--title">SUMMARY</h3>
      <p className="summary--content"></p>

      {/* {isFormOpen && (
   
      )} */}

      {!isFormOpen && (
        <button className="edit--button" onClick={toggleForm}>
          EDIT
        </button>
      )}
    </section>
  );
}
