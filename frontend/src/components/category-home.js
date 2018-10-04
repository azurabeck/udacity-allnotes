import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// IMAGE IMPORTS
import AllImg from '../images/allGray.svg'
import AllImgActive from '../images/all.svg'


const withToggle = (WrappedComponent) => ({ location }) => 
  location.pathname === '/' ?
  <WrappedComponent>
    <img src={AllImgActive} alt='' width='30' height='30' />
  </WrappedComponent>
  :
  <WrappedComponent>
    <Link to='/'><img src={AllImg} alt='' width='30' height='30' /></Link>
  </WrappedComponent>

const QuickLinks = ({ children }) => {
  return (
        <div className='allButton'>
          {children}
        </div>
  )
}

export default withRouter(withToggle(QuickLinks));