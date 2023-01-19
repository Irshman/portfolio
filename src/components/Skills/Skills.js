import React from 'react';
import Skill from '../Skill/Skill';

import './Skills.scss';

const Skills = () => {
  const mySkills = [
    { id: 1, name: 'HTML', percent: 90, bgColor: 'linear-gradient(90deg, rgba(227,76,38,1) 0%, rgba(240,101,41,1) 52%)' },
    { id: 2, name: 'CSS', percent: 90, bgColor: 'linear-gradient(90deg, rgba(39,75,217,1) 0%, rgba(41,101,241,1) 100%)' },
    { id: 3, name: 'Sass', percent: 85, bgColor: '#cc6699' },
    { id: 4, name: 'JavaScript', percent: 70, bgColor: '#f0db4f' },
    { id: 5, name: 'React', percent: 55, bgColor: '#61dbfb' },
    { id: 6, name: 'Redux', percent: 50, bgColor: '#6737B8' },
    { id: 7, name: 'Git', percent: 60, bgColor: 'linear-gradient(90deg, rgba(63,44,0,1) 0%, rgba(240,80,48,1) 100%)' },
    { id: 8, name: 'Bootstrap 5 / Material UI / Tailwind', percent: 40, bgColor: 'linear-gradient(90deg, rgba(96,44,80,1) 0%, rgba(0,177,255,1) 52%, rgba(21,194,184,1) 100%)' },
    { id: 9, name: 'GSAP / Framer Motion', percent: 30, bgColor: 'linear-gradient(90deg, rgba(131,188,61,1) 20%, rgba(240,1,181,1) 40%, rgba(107,7,255,1) 80%, rgba(0,116,255,1) 100%)' },
  ];

  return (
    <section className='skills'>
      <div className='container'>
        <h2 className='skills__title title'>Skills</h2>
        <div className='skills__body'>
          <div className='skills__item'>
            {mySkills.map((skill) => {
                return (
                  <Skill
                    key={skill.id}
                    name={skill.name}
                    percent={skill.percent}
                    bgColor={skill.bgColor}
              /> 
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
