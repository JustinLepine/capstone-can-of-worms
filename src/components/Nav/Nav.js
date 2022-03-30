import React from 'react';
import Logo from '../../assets/icons/can_of_worms.svg';
import Drop from '../../assets/icons/drop_down.svg';
import './Nav.scss';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className='nav'>
      <Link to='/'>
        <img className='nav__logo' src={Logo} alt='logo' />
      </Link>
        <img className='nav__drop' src={Drop} alt='drop'/>
    </section>
  )
}

export default Nav