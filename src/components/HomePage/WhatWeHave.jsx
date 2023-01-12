import React from 'react'
import image from '../../constants/image'

const WhatWeHave = () => {
  return (
    <div>
      <h1 className='home__whatwehave-tittle'>Tại sao nên chọn chúng tôi</h1>
    <div className='home__whatwehave'>
        
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>KẾT HỢP KIẾN THỨC & CHỦ ĐỀ THỰC TẾ</h4>
            <div className='whatwehave-line'></div>
            <p>Quy trình giảng dạy tích hợp công nghệ hiện đại, giúp trẻ nhanh chóng nắm bắt kiến thức và dần hình thành thói quen học tập chủ động.</p>
        </div>
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>ỨNG DỤNG CÔNG NGHỆ CAO</h4>
            <div className='whatwehave-line'></div>
            <p>Ứng dụng công nghệ đa nền tảng giúp trẻ cảm thụ bài giảng một cách chân thực & sinh động.</p>
        </div>
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>PHƯƠNG PHÁP HỌC VUI NHỘN</h4>
            <div className='whatwehave-line'></div>
            <p>Thông qua trò chơi vận động, thực hành trải nghiệm, câu chuyện sắc màu và các hoạt động tương tác, mang đến cho trẻ môi trường tiếng Anh vừa học vừa chơi, vừa vui vừa hiệu quả.</p>
        </div>
    </div>
    </div>
  )
}

export default WhatWeHave