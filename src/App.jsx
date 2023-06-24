import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="resume">
      <Header />
      <Summary />
      <Skills />
      <Education />
      <Project />
      <Experience />
    </div>
  );
}

export default App;
