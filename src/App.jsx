import './App.css';
import Features from './components/Features';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import NavBar from './components/NavBar';

function App() {
  return (
  <div>
    <NavBar />
    <Home/>
    <Features />
    <HowItWorks />
  </div>
  );
}

export default App;
