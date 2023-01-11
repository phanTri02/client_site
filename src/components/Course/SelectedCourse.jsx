import React from 'react'
import './course.css'
import image from '../../constants/image'

const SelectedCourse = () => {
  return (
    <div className='app__selected'>
    <div className='app__selected-img'>
        <img src={image.banner} alt="" />
    </div>
    <div className='app__selected-text'>
      <div className='selected__subtitle'>Lựa chọn khóa học</div>
      <div className='selected__title'>Các khóa học đa dạng phù hợp với mọi lứa tuổi & nhu cầu</div>
      <div className='selected__desc'></div>
      <div className='selected__testi'>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>2,000</div>
          <div className='testi__item-desc'>People Views</div>
        </div>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>1,500+</div>
          <div className='testi__item-desc'>Users</div>
        </div>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>30</div>
          <div className='testi__item-desc'>Courses</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SelectedCourse