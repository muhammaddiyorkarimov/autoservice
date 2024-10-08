import './sidebar.css'
import images from './../../images/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActiveState } from '../../functions/useActiveState';

function Sidebar() {

  const { active, toggleActive, activeLink, toggleLinkActive } = useActiveState()


  return (
    <div className={`sidebar ${active}`}>
      <div className="logo">
        <img onClick={toggleActive} className='slider-icon' src={images.slider} alt="slider icon" />
        <h1>Davr motors</h1>
      </div>
      <nav >
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link onClick={toggleLinkActive} className={`${activeLink}`}>
            <img src={images.menu} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
      </nav>
    </div>
  )
}

export default Sidebar