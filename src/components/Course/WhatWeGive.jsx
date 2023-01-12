import React from 'react'
import './course.css'
import {FaUserGraduate, FaBook, FaChalkboardTeacher} from 'react-icons/fa'

const WhatWeGive = () => {
  return (
    <div className='app__whatwegive'>
        <div className='app__whatwegive__content'>
            <div className='banner__subtitle'>Về chúng tôi</div>
            <div className='whatwegive__title'>Rất nhiều học viên và phụ huynh tin tưởng và chọn lựa trung tâm</div>
            <div className='whatwegive__desc'></div>
        </div>
        <div className='app__whatwegive__item'>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><FaChalkboardTeacher/></div>
                <div className='whatwegive__item-title'>50+</div>
                <div className='whatwegive__item-desc'>Giảng viên và trợ giảng có chuyên môn.</div>
            </div>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><FaUserGraduate /></div>
                <div className='whatwegive__item-title'>500+</div>
                <div className='whatwegive__item-desc'>Học viên đang theo học.</div>
            </div>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><FaBook /></div>
                <div className='whatwegive__item-title'>30+</div>
                <div className='whatwegive__item-desc'>Lớp học đang được tổ chức.</div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeGive