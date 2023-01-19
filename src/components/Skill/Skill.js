import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

import './Skill.scss'

const Skill = ({name, percent, bgColor}) => {
  return (
    <div className='skill'>
      <h3 className='skill__name'>{name}</h3>
      <ProgressBar  margin="0 auto" animateOnRender={true} transitionTimingFunction='ease-out' transitionDuration='2s' bgColor={bgColor} completed={percent} />
    </div>
  )
}

export default Skill