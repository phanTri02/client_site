import React from 'react'
import './course.css'
import CourseCard from './CourseCard'

const AvailableCourse = () => {
  return (
    <div className='app__available'>
      <div className='app__available-courses'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className='app__available-desc'>
        <div className='available__subtitle'>AVAILABLE FOR YOU</div>
              <div className='available__title'>Các khóa học</div>
              <div className='available__desc'></div>
              <button className='available__registerbutton'>See all</button>
        </div>
    </div>
  )
}

export default AvailableCourse