import React from 'react'
import Reel from '../../assets/icons/fly-reel.svg';
import Rod from '../../assets/icons/rod.svg';
import './Rods.scss';

function Rods() {
  return (
    <section className='rods'>
    <div className='rods__button'>
      <img className='rods__icon' src={Rod} alt='rod-icon'/>
      <p className='rods__subtitles'>Spinning Rods</p>
    </div>
    <div className='rods__button'>
      <img className='rods__icon' src={Reel} alt='crankbait-icon'/>
      <p className='rods__subtitles'>Spinning Reel</p>
    </div>
    <div className='rods__button'>
      <img className='rods__icon' src={Rod} alt='crankbait-icon'/>
      <p className='rods__subtitles'>Fly Rods</p>
    </div>
    <div className='rods__button'>
      <img className='rods__icon' src={Reel} alt='crankbait-icon'/>
      <p className='rods__subtitles'>Fly Reel</p>
    </div>
  </section>
  )
}

export default Rods