import React from 'react'
import HomeComp from '../components/HomeComp';
import AboutForHome from '../components/AboutForHome';
import Clinic from '../components/Clinic';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import TreatCard from '../components/TreatCard';
import BlogCard from '../components/BlogCard';

const Home = (props) => {
  return (
    <>
      <div style={{ height: '100%', display: 'flex', justifyContent: "center", }}>
        <HomeComp login={props.login} />
      </div>
      <div style={{ height: '100%' }}>
        <AboutForHome />
      </div>
      <div style={{ height: '100%' }} >
        <TreatCard show={false} setTreat={props.setTreat} />
      </div>
      <div style={{ height: '100%' }}>
        <BlogCard show={true} setBlog={props.setBlog} />
      </div>
      <div style={{ height: '100%' }} className='bg-dark bg-opacity-25 ' >
        <Clinic />
      </div>
      <div style={{ height: '100%' }}>
        <Faq />
      </div>
      <div style={{ height: '100%' }}>
        <Footer setTreat={props.setTreat}/>
      </div>
    </>
  )
}

export default Home
