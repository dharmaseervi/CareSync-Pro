import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const AboutMe = () => {
  return (
    <>
      <div className='d-flex justify-content-center m-5 ' >
        <div style={{ width: '85vw' }} className='d-flex flex-column  gap-4'>
          <div>
            <h4>Dr. Manik Dalvi</h4>
            <p>Obstetrics & Gynecology</p>
          </div>
          <div>
            <h4>Biography</h4>
            <p>Dr. Manik Dalvi is a renowned and experienced Obstetrics & Gynecology in Bhiwandi. She brings with her an experience of 12 years and has been associated with some of the best hospitals in Bhiwandi. A dedicated compassionate doctor who handles many challenging cases with the latest cutting edge technology. She offers patient-friendly scientific advice to your problems while maintaining the highest professional and ethical values.
            </p>
          </div>
          <div>
            <h4>Education</h4>
            <p>MBBS</p>
            <p>MS</p>
          </div>
          <div>
            <h4>Experience</h4>
            <p>12 years</p>
          </div>
        </div>
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default AboutMe
