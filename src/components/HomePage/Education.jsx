import React from 'react'
import image from '../../constants/image'

const Education = () => {
  return (
    <div className='home__education'>
      <div className='home__education-img'>
        <img src={image.education} alt="" />
      </div>
      <div className='home__education-text'>
        <div className='homeedu__subtitle'></div>
        <div className='homeedu__title'>BƯỚC ĐỆM CHO HÀNH TRÌNH
CHINH PHỤC NẤC THANG CAMBRIDGE</div>
        <div className='homeedu__desc'>Trẻ tiếp thu tiếng Anh một cách tự nhiên, phát âm chuẩn, phản xạ nhanh và dễ dàng hình thành đam mê học tiếng Anh ngay từ tuổi mẫu giáo để sẵn sàng chinh phục chứng chỉ Cambridge trong giai đoạn tiếp theo</div>

      </div>
    </div>
  )
}

export default Education