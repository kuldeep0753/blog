import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <div className='wrapper'>
        <img src='./youtu.png' alt='' className='companyLogo'/>
        <h3 className='companyTitle'>Atomize</h3>
        <div className='itemsAlign'>
        <ul className='feature'>
          <li><a href='' className='link'>Features</a></li>
          <li><a href='' className='link'>Github</a></li>
          <li><a href='' className='link'>For Designers</a></li>
          <li></li>        
        </ul>
        <button className='documentButton'>Documentation</button>
        </div>
        
      </div>
    </nav>
    
  )
}
