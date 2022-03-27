import React from 'react';
import Logo from '../../assets/icons/can_of_worms.svg';
import Drop from '../../assets/icons/drop_down.svg';
import './Nav.scss';

function Nav() {
  return (
    <section className='nav'>
        <img className='nav__logo' src={Logo} alt='logo' />
        <img className='nav__drop' src={Drop} alt='drop'/>
    </section>
  )
}

export default Nav