import { useState } from "react";

export default function Education() {
  const [formData, setFormData] = useState({
    degree: "",
    date: "",
    university: "",
    location: "",
  });

  const [educationArr, setEducationArr] = useState([
    {
      degree: "B.S Engineering Technology, Computer Technology",
      date: "Sept. 2019 - May. 2023",
      university: "New Jersey Institute of Technology",
      location: "Newark NJ",
    },
  ]);

  console.log(educationArr);
  const educationBlocks = educationArr.map((education, idx) => {
    return (
      <div key={idx}>
        <div className="education--degree">
          <h4 className="education--degree-name">{education.degree}</h4>
          <h4 className="education--degree-date">{education.date}</h4>
        </div>
        <div className="education--university">
          <h4 className="education--university-name">{education.university}</h4>
          <h4 className="education--university-location">
            {education.location}
          </h4>
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
  }

  function handleSubmit(event) {
    event.preventDefault();
    setEducationArr((prevArray) => [...prevArray, formData]);
  }

  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen((prevState) => !prevState);
  }
  return (
    <section className="education">
      <h3 className="education--title">EDUCATION</h3>
      {educationBlocks}
      {isFormOpen && (
        <form onSubmit={handleSubmit} className="edit--form">
          <input
            type="text"
            placeholder="Degree title"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Degree Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="University Name"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="University Location"
            name="location"
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
