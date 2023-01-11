import React from 'react'
import './home.css'
import image from '../../constants/image'

const Hero = () => {
  return (
    <div className='home__banner'>
        <div className='home__banner-text'>
            <div className='homebn__subtitle'>Online training</div>
            <div className='homebn__title'></div>
            <div className='homebn__desc'>Lựa chọn các khóa học theo năng lực</div>
            <div>
                <button className='homebn__getquotebtn'>Get Quote Now</button>
            </div>
        </div>
        <div className='home__banner-img'>
            <img src={image.hero} alt="" />
        </div>
    </div>
  )
}

export default Hero