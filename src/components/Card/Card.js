import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import LazyLoad from 'react-lazy-load';

import './Card.scss';


const Card = ({title, tags, data, img, link}) => {

  return (
    <div className="card">
      <div className="card__image card__image">
          <LazyLoad>
            <img src={img} alt={title} />
          </LazyLoad>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__skills">{tags.map(el => <span className='card__tags'>{el}</span>)}</div>
        <div className='card__footer'>
          <span className='card__data'>{data}</span>
          <a target='_blank' rel='noreferrer' href={link} className="card__btn btn">Visit {title} &nbsp;<BsArrowUpRight /></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
