import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className = "app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info"> 
      <SubHeading title='Chase the new flavour'/>
      <h1 className='app__header-h1'> Make yourself feel at home at Whatever </h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Welcome to Whatever bar and homestyle website! We are so happy to be able to arnsela liverpool manchester city is better than united</p>
      <button type='button' className='custom__button'> Explore Menu </button>
      
    </div>

    <div className='app__wrapper_img'> 
        <img src={images.welcome} alt='img'/>
    </div>
  </div>
);

export default Header;
