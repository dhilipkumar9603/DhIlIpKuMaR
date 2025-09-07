import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import About from './sections/about.jsx';
import Landing from './landing.jsx';
import Main_frame from './main_frame.jsx';
import Skills from './sections/skills.jsx';
import ContactForm from './sections/contact.jsx';
import Projects from './sections/projects.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Main_frame />}>
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />}/>
          <Route path="contact" element={<ContactForm />}/>
          <Route path="projects" element={<Projects />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
