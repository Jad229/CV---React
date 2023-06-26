import { useState } from "react";

export default function Experience() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    company: "",
    location: "",
  });

  const [experienceArray, setExperienceArray] = useState([
    {
      title: "Keyholder",
      date: "Jan 2020 - Apr 2021",
      company: "Autozone",
      location: "North Bergen, NJ",
    },
  ]);

  const experienceBlocks = experienceArray.map((experience, idx) => {
    return (
      <div key={idx}>
        <div className="details">
          <h4 className="details--title">{experience.title}</h4>
          <h4 className="details--date">{experience.date}</h4>
        </div>
        <div className="details--organization">
          <h4 className="details--organization-name">{experience.company}</h4>
          <h4 className="details--location">{experience.location}</h4>
        </div>
      </div>
    );
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setExperienceArray((prevArray) => [...prevArray, formData]);
  }

  function toggleForm() {
    setIsFormOpen((prevState) => !prevState);
  }
  return (
    <section className="experience">
      <h3>PROFESSIONAL EXPERIENCE</h3>
      {experienceBlocks}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="edit--form">
          <input
            type="text"
            name="title"
            placeholder="Job title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Company location"
            value={formData.location}
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
