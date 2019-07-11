import React from 'react';
import Filler from './Filler'

const SlantMeter = ({slant}) => {
  return (
    <div id='center' className='slant-meter'>
      <Filler slant={slant} />
    </div>
  )
}

export default SlantMeter;
