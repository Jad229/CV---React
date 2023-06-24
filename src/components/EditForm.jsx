export default function EditForm({
  inputs,
  handleSubmit,
  handleChange,
  toggleForm,
}) {
  const inputElements = inputs.map((input, idx) => {
    if (input.type === "textarea") {
      return (
        <div className="edit--form-input-container" key={idx}>
          <label className="edit--form-labels" htmlFor={input.name}>
            {input.name}:
          </label>
          <textarea
            name={input.name}
            value={input.value}
            onChange={handleChange}
            placeholder={`Type ${input.name} here`}
          />
        </div>
      );
    } else {
      return (
        <div className="edit--form-input-container" key={idx}>
          <label className="edit--form-labels" htmlFor={input.name}>
            {input.name}:
          </label>
          <input
            className="edit--form-inputs"
            name={input.name}
            type={input.type}
            value={input.value}
            onChange={handleChange}
          />
        </div>
      );
    }
  });

  return (
    <form className="edit--form" onSubmit={handleSubmit}>
      {inputElements}
      <div className="edit--form-buttons">
        <button className="form-buttons" onClick={toggleForm}>
          ADD
        </button>
        <button className="form-buttons" onClick={toggleForm}>
          CLOSE
        </button>
      </div>
    </form>
  );
}
