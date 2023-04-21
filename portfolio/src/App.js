import './style.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Landing/>
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
    <Footer />
    </>
  );
}

export default App;
