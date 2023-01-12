import React from 'react'
import {AvailableCourse, Banner, SelectedCourse, Testimonials, WhatWeGive, FeaturedProducts} from '../../components'

const Course = () => {
  return (
    <div>
        <Banner />
        <WhatWeGive />
        <SelectedCourse />
        <AvailableCourse />
        <Testimonials />
        <FeaturedProducts/>
    </div>
  )
}

export default Course