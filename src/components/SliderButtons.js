import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './SliderButtons.css'

function SliderButtons({handleLeftClick, handleRigthClick}) {
    return (

        <div>
            <FaArrowAltCircleLeft className='left-arrow' onClick={handleLeftClick} />
            <FaArrowAltCircleRight className='right-arrow' onClick={handleRigthClick} />
        </div>

    )
}

export default SliderButtons
