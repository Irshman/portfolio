import React from 'react';
import Card from '../Card/Card';

import './Portfolio.scss';
import freebieAgency from '../../img/project/freebie.png'
import escape from '../../img/project/escape.png'
import freshfruits from '../../img/project/freshfruits.png'
import trawelend from '../../img/project/travelend.png'
import formpay from '../../img/project/payform.png'
import konstructor from '../../img/project/konstructor.png'
import starwars from '../../img/project/starwars.png'
import logos from '../../img/project/logos.png'
import theweather from '../../img/project/thewether.png'
import ghbatle from '../../img/project/gh-battle.png'
import formvalid from '../../img/project/formvalidate.png'
import game2848 from '../../img/project/2048.png'
import organic from '../../img/project/organicfruits.png'
import furniking from '../../img/project/furniking.png'


const Portfolio = () => {
  const myWorks = [
    {
      id: 1,
      title: 'Freebie Agency',
      image: freebieAgency,
      tags: ['HTML', 'CSS', 'JS'],
      data: 'September 2021',
      link: 'https://irshman.github.io/freebie/'
    },
    { 
      id: 2,
      title: 'Escape',
      image: escape,
      tags: ['HTML', 'SCSS', 'JS', 'Gulp'],
      data: 'September 2021',
      link: 'https://irshman.github.io/escape/'
    },
    { 
      id: 3,
      title: 'Form of payment',
      image: formpay,
      tags: ['HTML', 'CSS'],
      data: 'October 2021',
      link: 'https://irshman.github.io/form/'
    },
    { 
      id: 4,
      title: 'Konstructor',
      image: konstructor,
      tags: ['HTML', 'SCSS', 'JS', 'GSAP'],
      data: 'February 2022',
      link: 'https://irshman.github.io/konstruct/'
    },
    { 
      id: 5,
      title: 'Star-Wars API',
      image: starwars,
      tags: ['HTML', 'SCSS', 'JS', "API"],
      data: 'February 2022',
      link: 'https://irshman.github.io/Star-Wars-API/'
    },
    { 
      id: 6,
      title: 'Freshfruits',
      image: freshfruits,
      tags: ['HTML', 'SCSS', 'JS'],
      data: 'January 2022',
      link: 'https://irshman.github.io/freshfruits/'
    },
    { 
      id: 7,
      title: 'Logos',
      image: logos,
      tags: ['HTML', 'SCSS', 'JS', 'Swiper', "Gulp"],
      data: 'February 2022',
      link: 'https://irshman.github.io/logos_shop/'
    },
    { 
      id: 8,
      title: 'The weather API',
      image: theweather,
      tags: ['HTML', 'SCSS', 'JS', "API"],
      data: 'March 2022',
      link: 'https://irshman.github.io/theweather/'
    },
    { 
      id: 9,
      title: 'Trawelend',
      image: trawelend,
      tags: ['HTML', 'CSS', 'JS', 'Swiper', 'GSAP'],
      data: 'Desember 2021',
      link: 'https://irshman.github.io/trevland/'
    },
    { 
      id: 10,
      title: 'GitHub Battle',
      image: ghbatle,
      tags: ['React', 'SCSS', 'API', 'Axios'],
      data: 'November 2022',
      link: 'https://irshman.github.io/github-battles/'
    },
    { 
      id: 11,
      title: 'Form Validation',
      image: formvalid,
      tags: ['React', 'SCSS'],
      data: 'October 2022',
      link: 'https://irshman.github.io/form-validate/'
    },
    { 
      id: 12,
      title: '2048',
      image: game2848,
      tags: ['HTML', 'SCSS', 'JS'],
      data: 'October 2022',
      link: 'https://irshman.github.io/2048/'
    },
    { 
      id: 13,
      title: 'Organic food',
      image: organic,
      tags: ['HTML', 'SCSS', 'JS', 'Gulp', 'Swiper'],
      data: 'October 2022',
      link: 'https://irshman.github.io/organic_food/'
    },
    { 
      id: 14,
      title: 'Furniking',
      image: furniking,
      tags: ['React', 'SCSS', 'JS', 'Framer Motion', 'Swiper'],
      data: 'February 2023',
      link: 'https://https-irshman-github-io-furniking.vercel.app/'
    },
  ];


  return (
    <section className='portfolio'>
      <div className='container'>
        <h2 className='portfolio__title title'>My works</h2>
        <div className='portfolio__cards'>
          {myWorks.reverse().map(work => <Card key={work.id} title={work.title} tags={work.tags} img={work.image} data={work.data} link={work.link} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
