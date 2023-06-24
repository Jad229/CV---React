export default function Header() {
  return (
    <header className="header">
      <h1 className="header--name">Justin Diaz</h1>
      <div className="header--title-container">
        <h2 className="header--title">Full-Stack-Developer</h2>
      </div>
      <div className="header--contact">
        <p className="header--contact-detail">123-456-7890</p>
        <p className="header--contact-detail">Email@email.com</p>
        <p className="header--contact-detail">Triton Lane, Wizard City</p>
        <p className="header--contact-detail">Linkedin</p>
        <p className="header--contact-detail">GitHub</p>
      </div>
    </header>
  );
}
