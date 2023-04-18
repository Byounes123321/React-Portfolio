import './style.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Landing/>
      <About />
    </main>
    </>

  );
}

export default App;
