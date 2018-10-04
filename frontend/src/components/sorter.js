import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS IMPORT
import { setSortBy } from 'actions/sort-by';

// EXTERNAL LIBRARY 
import MaterialIcons from 'material-icons-react'

const Sorter = ({ content, sortBy, onSelectSortBy }) => {
  const getValueFromParams = ({ [content]: { type, order }}) => `${type}-${order}`;
  const getParamsFromValue = (value) => value.split('-');

  return (


    <div className='sorter'>
        <select value={getValueFromParams(sortBy)} onChange={(event) => onSelectSortBy(content)(...getParamsFromValue(event.target.value))}>
          <option value='voteScore-descending'>Popular  </option>
          <option value='voteScore-ascending'>Unpop.  </option>
          <option value='timestamp-descending'>Newest  </option>
          <option value='timestamp-ascending'>Oldest  </option>
        </select>
        <label className='iconFilter'><MaterialIcons icon='filter_list' color='gray' /></label>
    </div>


  )
}

const mapStateToProps = ({ sortBy }) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);