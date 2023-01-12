import React from 'react'
import './course.css'
import image from '../../constants/image'

const Banner = () => {
  return (
    <div className='app__banner'>
        <div className='app__banner-text'>
            <div className='banner__subtitle'></div>
            <div className='banner__title'>Hãy để chúng tôi tìm ra<span> Khóa học</span> thích hợp cho bạn</div>
            <div className='banner__desc'>Chúng tôi mong muốn tìm ra giải pháp hữu hiệu cho việc học tiếng anh của bạn</div>
            <button className='banner__registerbutton'>Tư vấn ngay</button>
        </div>
        <div className='app__banner-img'>
            <img src={image.banner} alt="" />
        </div>
    </div>
  )
}

export default Banner