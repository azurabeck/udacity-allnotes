import React from 'react';

// COMPONENTS IMPORT
import CategoryAll from './category-home';
import Categories from './categories';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <CategoryAll />
      <Categories />
      
      <label className='siteTitle'> All<span className='colorYellow'>Notes </span></label>

    </div>
)};

export default Sidebar;