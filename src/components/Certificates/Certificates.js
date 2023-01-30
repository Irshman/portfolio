import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination,  Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Certificates.scss';
import htmlCss from '../../img/HTML_CSS.png';
import jsBase from '../../img/JSBase.png';
import jsAdvanced from '../../img/JSAdvc.png';
import FrontEndAdvanced from '../../img/FrontEnd.png';

const Certificates = () => {
  const myCertificates = [
    { id: 1, title: 'HTML CSS', src: htmlCss },
    { id: 2, title: 'JavaScript Base', src: jsBase },
    { id: 3, title: 'JavaScript Advanced', src: jsAdvanced },
    { id: 4, title: 'Fron-end Advanced', src: FrontEndAdvanced },
  ];

  return (
    <section className='certificates'>
      <div className='container'>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className='mySwiper'>
          {myCertificates.map(item => (<SwiperSlide>
            <img src={item.src} alt={item.title} />
          </SwiperSlide>))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
