import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
function App() {
  return (
    <div className="resume">
      <Header />
      <Summary />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
