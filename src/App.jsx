
import './App.css'
import { useState, useEffect } from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MySkills from './Components/MySkills/MySkills'
import Projects from './Components/Projects/Projects'
import Qualifications from './Components/Qualifications/Qualifications'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import Loading from './Components/Loading/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        {/* <Skills/> */}
        <MySkills/>
        <Services/>
        <Projects/>
        <Qualifications/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App
