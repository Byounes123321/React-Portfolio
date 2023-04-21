import './style.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Landing/>
      <About />
      <Projects />
      <Education />
    </main>
    </>

  );
}

export default App;
