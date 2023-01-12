import React from 'react'
import './course.css'
import {AiFillStar} from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className='app__testimonials'>
      <div className='app__testi-title'>Cảm nghĩ của phụ huynh và học viên</div>
      <div className='app__testi-items'>
        <div className='app__testi-item'>
          <div className='customer__info'>
            <img src="https://www.pngfind.com/pngs/m/378-3780189_member-icon-png-transparent-png.png" alt="" />
            <div className='customer__basicinfo'>
              <h4 className='customer__name'>Trần Văn Đỉnh</h4>
              <p className='customer__role'>Phụ huynh</p>
            </div>
          </div>
          <div className='customer__stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className='customer__comment'>"Tôi chọn trung tâm vì được các đồng nghiệp giới thiệu và tôi rất yên tâm khi con học rất hiệu quả."</div>
        </div>
        <div className='app__testi-item'>
          <div className='customer__info'>
            <img src="https://www.pngfind.com/pngs/m/378-3780189_member-icon-png-transparent-png.png" alt="" />
            <div className='customer__basicinfo'>
              <h4 className='customer__name'>Harry Truong</h4>
              <p className='customer__role'>Học viên</p>
            </div>
          </div>
          <div className='customer__stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className='customer__comment'>"Sau khi học IELTS tại đây, cả 4 kỹ năng của em đều được cải thiện đáng kể,
            ở đây cũng có những kì thi thử để tụi em chắc chắn hơn về kỹ năng của mình."</div>
          </div>
          
      </div>
    </div>
  )
}

export default Testimonials