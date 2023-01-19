import React from 'react'
import { Dna } from  'react-loader-spinner'

import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
        <Dna
        visible={true}
        height="150"
        width="150"
        wrapperClass="loader__item"
      />
    </div>
  )
}

export default Loader