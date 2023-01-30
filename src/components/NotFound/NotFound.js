import React, { useEffect } from 'react'
import { gsap } from'gsap';

import './NotFound.scss'

const NotFound = ({loaded}) => {

  useEffect(() => {
      gsap.fromTo(".notfound__title", {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 1.5, ease: "elastic"});
      gsap.fromTo(".notfound__text", {opacity: 0, y: 200}, {opacity: 1, y: 0, duration: 2, ease: "elastic"}); 
  }, [loaded])

  return (
    <section className='notfound'>
      <div className='container'>
        <h2 className='notfound__title'>404</h2>
        <p className='notfound__text'>Sorry, page not found😢</p>
      </div>
    </section>
  )
}

export default NotFound