import React from 'react'
import BlogCard from '../components/BlogCard'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Blogs = (props) => {
  return (
    <>
      <div>
        <BlogCard setBlog={props.setBlog} />
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

export default Blogs
