import React from 'react';
import Crankbait from '../../assets/icons/crankbait.svg';
import Hook from '../../assets/icons/hook.svg';
import Rod from '../../assets/icons/rod.svg';
import Knot from '../../assets/icons/knot_icon.svg';
import './Dash.scss';

function Dash() {
  return (
    <section className='dash'>
      <div className='dash__button'>
        <img className='dash__icon' src={Crankbait} alt='crankbait-icon'/>
        <p className='dash__subtitles'>Lures</p>
      </div>
      <div className='dash__button'>
        <img className='dash__icon' src={Hook} alt='crankbait-icon'/>
        <p className='dash__subtitles'>Tackle</p>
      </div>
      <div className='dash__button'>
        <img className='dash__icon' src={Rod} alt='crankbait-icon'/>
        <p className='dash__subtitles'>Rods & Reels</p>
      </div>
      <div className='dash__button'>
        <img className='dash__icon' src={Knot} alt='crankbait-icon'/>
        <p className='dash__subtitles'>Knots</p>
      </div>
    </section>
  )
}

export default Dash;