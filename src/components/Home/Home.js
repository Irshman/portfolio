import React from 'react';
import LazyLoad from 'react-lazy-load';

import './Home.scss';
import myPhoto from '../../img/me.jpg';
import gmail from '../../img/gmail.png';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import telegram from '../../img/telegram.png';

const Home = () => {
  const mySocialLinks = [
    { title: 'gmail', link: 'mailto:zhenyaskvortsov9@gmail.com', icon: gmail },
    { title: 'github', link: 'https://github.com/Irshman', icon: github },
    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/evhenii-skvortsov-8695351a9/',
      icon: linkedin,
    },
    { title: 'telegram', link: 'https://t.me/Irshman', icon: telegram },
  ];

  return (
    <section className='home'>
      <div className='container'>
        <div className='home__body'>
          <div className='home__info'>
            <h1 className='home__name'>Hello, I'm Yevhenii Skvortsov</h1>
            <h2 className='home__title title'>About me</h2>
            <p className='home__text'>
              Hi, I'm Yevhenii Welcome to my portfolio site. I'm a passionate and detail-oriented front-end developer looking for an entry-level position to use my coding skills, solve complex problems, and help complete projects on time. Completed a course on front-end development.
Technologies: HTML5, CSS3, Sass/Scss, Bootstrap, Material-UI, JavaScript, Ajax, Git, ReactJS, Redux, Redux-Thunk, Axios, React-bootstrap, tailwind, GSAP
            </p>
            <div className='home__social social'>
              <ul className='social__list'>
                {mySocialLinks.map((item) => (
                  <li key={item.title} className='social__item'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      className='social__link'
                      href={item.link}>
                      <img src={item.icon} alt={item.title} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='home__img'>
            <LazyLoad>
              <img src={myPhoto} alt='image' />
            </LazyLoad>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
