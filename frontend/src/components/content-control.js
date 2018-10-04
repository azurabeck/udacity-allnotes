import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// ACTIONS IMPORTS
import { deletePost } from 'actions/posts';
import { deleteComment } from 'actions/comments';
import { CONTENT_POSTS, CONTENT_COMMENTS } from 'actions/constants';

// COMPONENTS IMPORTS
import EditLinkPost from './Posts/edit-link-post';
import EditLinkComment from './Comments/edit-link-comment';

// EXTERNAL LIBRARY
import { Col } from 'react-bootstrap'
import MaterialIcons from 'material-icons-react'

const ContentControl = ({ type, id,  history,  deletePost, deleteComment, showForm }) => (

  
  <Col md={12} className='contentControl'>
    {type === 'posts' ? 
      <EditLinkPost id={id} /> 
      :
      <EditLinkComment showForm={showForm} />
    }
    <div className='contentControlItem'>      
      <Link to='/' onClick={(event) => {
        event.preventDefault();
        if (type === CONTENT_POSTS) {
          deletePost(id);
          history.push('/');
        } else if (type === CONTENT_COMMENTS) {
          deleteComment(id);
        }
      }}>
      <MaterialIcons icon='delete' />
      </Link>
    </div>
  </Col>
)

export default withRouter(connect(
  undefined,
  { deletePost, deleteComment }
)(ContentControl));