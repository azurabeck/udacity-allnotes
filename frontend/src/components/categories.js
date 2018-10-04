import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// UTILS IMPORT
import { capitalizeFirst } from 'utils/helper';

// IMAGES IMPORT
import ReduxImg from '../images/reduxLogoGray.svg'
import ReactImg from '../images/reactLogoGray.svg'
import UdacityImg from '../images/udacityLogoGray.svg'
import ReduxImgActive from '../images/reduxLogo.svg'
import ReactImgActive from '../images/reactLogo.svg'
import UdacityImgActive from '../images/udacityLogo.svg'

let img
let imgActive

const Categories = ({ location, categories }) => (
 <ul className='categoriesList'>
   {
     categories.map((category, index) => {
            
      switch(category.name) {
          case 'react':                    
              imgActive = <img src={ReactImgActive} alt='' width='30' height='30' />
              img = <img src={ReactImg} alt='' width='30' height='30' />
              break; 
          case 'redux':
              imgActive = <img src={ReduxImgActive} alt='' width='30' height='30' />
              img = <img src={ReduxImg} alt='' width='30' height='30' />
              break; 
          case 'udacity':    
              imgActive = <img src={UdacityImgActive} alt='' width='30' height='30' />
              img = <img src={UdacityImg} alt='' width='30' height='30' />
              break; 
          default:
              img = category.name
              break;
      }       
    
      return (
        <li key={index}>
          {location.pathname === `/categories/${category.name}` ?
            <span>{imgActive}</span>
            :
            <Link to={`/categories/${category.name}`}>{img}</Link>
            }
        </li>
      )
    }) 
   }
 </ul>
)  

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(Categories));