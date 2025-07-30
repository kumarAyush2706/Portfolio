import React from 'react'
import Social from './Social'
import "./home.css"
import Data from './Data'
import ScrollDown from './ScrollDown'
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation'

const Home = () => {
  return (
    <section className="home section" id="home">
        <BackgroundAnimation />
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social/>
                <div className="home_img"> </div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home
