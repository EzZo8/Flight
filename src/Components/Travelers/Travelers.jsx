import React,{ useEffect } from 'react'
import paris from '../../assets/paris.jpeg'
import dubai from '../../assets/dubai.jpeg'
import maldives from '../../assets/maldives.jpeg'
import pyramids from '../../assets/pyramids.jpeg'

import traveler1 from '../../assets/traveler1.jpeg'
import traveler2 from '../../assets/traveler2.jpeg'
import traveler3 from '../../assets/traveler3.jpeg'
import traveler4 from '../../assets/traveler4.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    deestinationImage: paris,
    traverlerImage: traveler1,
    travelerName: "Mei Ling",
    social:"@MeiLing2"
  },
  {
    id: 2,
    deestinationImage: dubai,
    traverlerImage: traveler2,
    travelerName: "Ahmed Kamal",
    social:"@AKimo98"
  },
  {
    id: 3,
    deestinationImage: maldives,
    traverlerImage: traveler3,
    travelerName: "Maximilian Bauer",
    social:"@maxi_bauer91"
  },
  {
    id: 4,
    deestinationImage: pyramids,
    traverlerImage: traveler4,
    travelerName: "Jackson Mitchell",
    social:"@jacksonmitchell_"
  },

]

const Travelers = () => {
    
    useEffect( () => {
    Aos.init({duration:2000})
  },[])


  return (
    <div className='travelers container section'>
      <div className="sectionContainer">

        <h2 data-aos="fade-down" data-aos-duration="2500" >Top Travelers of this month!</h2>

        <div className="travelersContainer grid">

          {/* Single passenger card */}
          {
          travelers.map((item, index) => {
            return(
              
              <div data-aos="fade-up" data-aos-duration="2500" className="singleTraveler">
                <img src={item.deestinationImage} className='destinationImage' alt='' />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={item.traverlerImage} alt='' className='travelerImage' />
                  </div>
                  <div className='travelerName'>
                    <span>{item.travelerName}</span>
                    <p>{item.social}</p>
                  </div>
                </div>
              </div>
            )
          })
          }

        </div>
      </div>
      
    </div>
  )
}

export default Travelers
