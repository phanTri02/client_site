import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"
import image from '../../constants/image'

const Package = () => {
  return (
    <div className='home__package'>
        <div className='home__package-img'>
            <div className='home__package-label'>
                Sale
            </div>
            <img src={image.course} alt="" />
            <div className='home__package-price'>
                $20 USD
            </div>
        </div>
        <div className='home__package-content'>
            <h4>English Course</h4>
            <h3>English for kids</h3>
            <p className='package__desc'>Trọng tâm vào từ vựng và giao tiếp ở trẻ</p>
            <p className='package__price'>$6.48</p>
            <div className='package__purchase'>
                <AiOutlineDownload />
                <p>1,300 đã đăng ký</p>
            </div>
            <button>Learn more &gt;</button>
        </div>
    </div>
  )
}

export default Package