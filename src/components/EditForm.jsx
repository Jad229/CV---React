export default function EditForm({
  inputs,
  handleSubmit,
  handleChange,
  toggleForm,
}) {
  const inputElements = inputs.map((input, idx) => {
    if (input.type === "textarea") {
      return (
        <textarea
          key={idx}
          name={input.name}
          value={input.value}
          onChange={handleChange}
          placeholder={`Type ${input.name} here`}
        />
      );
    } else {
      return (
        <>
          <label className="edit--form-labels" htmlFor={input.name}>
            {input.name}
          </label>
          <input
            className="edit--form-inputs"
            key={idx}
            name={input.name}
            type={input.type}
            value={input.value}
            onChange={handleChange}
            placeholder={input.name}
          />
        </>
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
