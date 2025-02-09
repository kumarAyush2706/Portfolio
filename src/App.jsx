
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import MySkills from './Components/MySkills/MySkills'
import Qualifications from './Components/Qualifications/Qualifications'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
     <Header/>
     <main className="main">
      <Home/>
      <About/>
      {/* <Skills/> */}
      <MySkills/>
      <Services/>
      <Qualifications/>
      <Contact/>
      <Footer/>
     </main>
    </>
  )
}

export default App
