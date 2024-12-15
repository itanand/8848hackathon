import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutHackathon from './components/AboutHackathon';
import Themes from './components/Themes';
import Rules from './components/Rules';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <AboutHackathon />
      <Themes />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;
