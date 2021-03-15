import React, { useState } from 'react';
import SliderButtons from './SliderButtons';
import './ImageSlider.css'


const ImageSlider = ({ slides }) => {

  const length = slides.length;
  let windowWidth = window.innerWidth;

  const [slideState, setSlide] = useState({ current: 0, touchStart: 0, touchEnd: 0 });


  const nextSlide = () => {

    setSlide(state => state.current === length - 1 ? { ...state, current: 0 } : { ...state, current: state.current + 1 });

  };

  const prevSlide = () => {

    setSlide(state => state.current === 0 ? { ...state, current: length - 1 } : { ...state, current: state.current + -1 });

  };


  function handleTouchStart(e) {
    setSlide(state => ({ ...state, touchStart: e.targetTouches[0].clientX }));
  }

  function handleTouchMove(e) {
    setSlide(state => ({ ...state, touchEnd: e.targetTouches[0].clientX }));
  }

  function handleTouchEnd() {

    slideState.touchStart - slideState.touchEnd > 150 ? nextSlide() : prevSlide();

  }

  if (!Array.isArray(slides) || slides.length <= 0) {

    return null;

  }

  return (

    <section className='slider'>

      {windowWidth > 740 ? <SliderButtons handleLeftClick={prevSlide} handleRigthClick={nextSlide} /> : null}

      {slides.map((slide, index) => {
        return (
          <div
            className={index === slideState.current ? 'slide active' : 'slide'}
            key={index}
            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => handleTouchEnd()}
          >
            {index === slideState.current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
