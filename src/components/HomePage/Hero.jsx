import React from 'react'
import './home.css'
import image from '../../constants/image'

const Hero = () => {
  return (
    <div className='home__banner'>
        <div className='home__banner-text'>
            <div className='homebn__subtitle'>Anh ngữ mẫu giáo</div>
            <div className='homebn__title'></div>
            <div className='homebn__desc'>Khóa học dành cho trẻ em từ 4 - 6 tuổi</div>
            <div>
                <button className='homebn__getquotebtn'>Liên hệ ngay</button>
            </div>
        </div>
        <div className='home__banner-img'>
            <img src={image.hero} alt="" />
        </div>
    </div>
  )
}

export default Hero