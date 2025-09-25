import logo from './logo.svg';
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/1-Header/Header';
import Hero from './Components/2-Hero/Hero';
import Main from './Components/3-MainContent/Main';
import Contact from './Components/4-Contact/Contact';
import Footer from './Components/5-Footer/Footer';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';

function App() {
  return <>
   <div className='container1 px-2'>
  <Header/>
  <div className='divider' />
  <Hero/>
  <div className='divider' />
  <About/>
  <div className='divider' />
  <Skills/>
  <div className='divider' />
  <Main/>
  <div className='divider' />
  <Resume/>
  <div className='divider' />
  <Contact/>
  <div className='divider' />
  </div>
  <Footer/>
  </>
  
  
}

export default App;
