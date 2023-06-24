export default function Education() {
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
    </section>
  );
}
