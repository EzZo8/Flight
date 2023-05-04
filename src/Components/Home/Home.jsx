import React, { useEffect } from 'react'
import TakeOff from '../../assets/takeoff.png'
import Bgvid from '../../assets/bgvideo2.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect( () => {
    Aos.init({duration:2000})
  },[])

  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-lasting Memories With Us</h1>
      </div>
      
      <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">

        <div className="videoDiv">
          <video className='video' autoPlay muted loop src={Bgvid}></video>
        </div>

        <img src={TakeOff} className='plane'  />
      </div>
      
    </div>
  )
}

export default Home
