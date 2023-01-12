import React from 'react'

const FeaturedProducts = () => {
  return (
    <div className='home__feature'>
      <h4></h4>
      <h1>Liên hệ</h1>
      <p>Vui lòng nhập số điện thoại để trung tâm có thể liên hệ và trao đổi</p>
      <div className='home__feature-input'>
        <input type="text" placeholder='Vui lòng nhập số điện thoại' />
        <button>Gửi</button>
      </div>
    </div>
  )
}

export default FeaturedProducts