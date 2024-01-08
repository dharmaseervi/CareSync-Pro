import React from 'react'
import TreatCard from '../components/TreatCard'
import Faq from '../components/Faq'
import Footer from '../components/Footer'


const Treatment = (props) => {

  return (
    <>
      <div >
        <TreatCard setTreat={props.setTreat} show={true}/>
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

export default Treatment
