import React from 'react'
import Package from './Package'
import {AiOutlineDownload} from "react-icons/ai"
import image from '../../constants/image'

const Packages = () => {
  return (
    <div className='home__packages'>
      <div className='home__packages-desc'>
        <div className='packages__subtitle'>Practice Advice</div>
        <div className='packages__title'>Các khóa học khác</div>
        <div className='packages__desc'>Tìm hiểu thêm các khóa học phù hợp</div>
      </div>
      <div className='home__packages-courses'>
        <div className='home__package'>
          <div className='home__package-img'>
            <img src={image.childCourse} alt="" />
          </div>
          <div className='home__package-content'>
            <h4>Khóa học tiếng anh</h4>
            <h3>Anh ngữ thiếu nhi</h3>
            <p className='package__desc'>Khơi mở thế giới mới về tiếng anh</p>
            <div className='package__purchase'>
              <AiOutlineDownload />
              <p>1,300 đã đăng ký</p>
            </div>
            <button>Tìm hiểu thêm &gt;</button>
          </div>
        </div>
        <div className='home__package'>
          <div className='home__package-img'>
            <img src={image.childCourse} alt="" />
          </div>
          <div className='home__package-content'>
            <h4>Khóa học tiếng anh</h4>
            <h3>Anh ngữ thiếu niên</h3>
            <p className='package__desc'>Khơi mở sự tự tin </p>
            <div className='package__purchase'>
              <AiOutlineDownload />
              <p>1,300 đã đăng ký</p>
            </div>
            <button>Tìm hiểu thêm &gt;</button>
          </div>
        </div>
        <div className='home__package'>
          <div className='home__package-img'>
            <img src={image.childCourse} alt="" />
          </div>
          <div className='home__package-content'>
            <h4>Khóa học tiếng anh</h4>
            <h3>Luyện thi IELTS</h3>
            <p className='package__desc'>Khơi mở những cơ hội</p>
            <div className='package__purchase'>
              <AiOutlineDownload />
              <p>1,300 đã đăng ký</p>
            </div>
            <button>Tìm hiểu thêm &gt;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages