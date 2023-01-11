import React from 'react'
import './course.css'
import image from '../../constants/image'

const CourseCard = () => {
  return (
    <div className='course__card'>
        <div className='course__card-img'>
            <div className='course__card-label'>
                Best Course
            </div>
            <img src={image.course} alt="" />
            <div className='course__card-price'>
                $20 USD
            </div>
        </div>
        <div className='course__card-content'>
            <div className='course__card-title'>Anh ngữ mẫu giáo</div>
            <div className='course__card-info'>120 buổi - 1 Giáo viên - 1 Trợ giảng</div>
        </div>
    </div>
  )
}

export default CourseCard