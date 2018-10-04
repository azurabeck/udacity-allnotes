import React from 'react';
import { Link } from 'react-router-dom';

// ACTIONS IMPORT
import { CONTENT_POSTS } from '../../actions/constants';

// COMPONENTS IMPORT
import Sorter from '../sorter';
import PostSummary from './post-summary';

// EXTERNAL LIBRARY IMPORT
import MaterialIcons from 'material-icons-react'

const conditionalRender = (WrappedComponent) => ({ posts, ...props }) => (

  posts.length === 0 ?
  <WrappedComponent>
    <div className='emptyMsg'>
      <label className='emptyImg'><MaterialIcons icon='live help'/></label><br/>
      <label className='msgOnTop'>Sorry! We don't have a post.</label><br/>
      <label className='msgOnTop'>Click on the plus button to add</label>
    </div>
  </WrappedComponent>
  :
  <WrappedComponent {...props}>
    {posts.map(
      post => <PostSummary key={post.id} {...post} />
    )}
  </WrappedComponent>
)

const PostList = ({ children }) => (
  <div>
    <div className='filterMenu'>
      <Link to='/posts/new'>
        <label className='buttonAdd'><MaterialIcons icon='add' color='#F5F5F5'/></label>
      </Link>
      <Sorter content={CONTENT_POSTS} />
    </div>
    {children}
  </div>
)

export default conditionalRender(PostList);