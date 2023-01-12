import React from 'react'
import './course.css'
import CourseCard from './CourseCard'
import image from '../../constants/image'

const AvailableCourse = () => {
  return (
    <div className='app__available'>
      <div className='app__available-courses'>
        <div className='course__card'>
          <div className='course__card-img'>
            <img src={image.childCourse} alt="" />
          </div>
          <div className='course__card-content'>
            <div className='course__card-title'>Anh ngữ mẫu giáo</div>
            <div className='course__card-info'> Dành cho bé từ 4-6 tuổi, khơi mở niềm say mê học tập. </div>
          </div>
        </div>
        <div className='course__card'>
          <div className='course__card-img'>
            <img src={image.course} alt="" />
          </div>
          <div className='course__card-content'>
            <div className='course__card-title'>Anh ngữ thiếu nhi</div>
            <div className='course__card-info'>Dành cho bé 6-11 tuổi, khơi mở những giá trị toàn cầu của Thế kỷ 21.</div>
          </div>
        </div>
        <div className='course__card'>
          <div className='course__card-img'>
            <img src={image.course2} alt="" />
          </div>
          <div className='course__card-content'>
            <div className='course__card-title'>Anh ngữ thiếu niên</div>
            <div className='course__card-info'>Dành cho học viên 11-15 tuổi, khơi mở sự tự tin & khát khao dẫn đầu.</div>
          </div>
        </div>
        <div className='course__card'>
          <div className='course__card-img'>
            <img src={image.ielts} alt="" />
          </div>
          <div className='course__card-content'>
            <div className='course__card-title'>Luyện thi ielts</div>
            <div className='course__card-info'>Cho học viên từ 15 tuổi trở lên, khơi mở những cơ hội. </div>
          </div>
        </div>
        
      </div>
      <div className='app__available-desc'>
        <div className='available__subtitle'>SẴN SÀNG CHO CÁC KHÓA HỌC</div>
        <div className='available__title'>Các khóa học hiện tại</div>
        <div className='available__desc'></div>
        <button className='available__registerbutton'>See all</button>
      </div>
    </div>
  )
}

export default AvailableCourse