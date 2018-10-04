import React from 'react';
import { Link } from 'react-router-dom';

// ACTIONS IMPORT
import { CONTENT_POSTS } from 'actions/constants';

// COMPONENTS
import EditLink from '../edit-link';

// EXTERNAL LIBRARY
import MaterialIcons from 'material-icons-react'

const EditLinkPost = ({ id }) => (
  <EditLink>
    <Link to={`/${CONTENT_POSTS}/${id}/edit`} >      
        <MaterialIcons icon='edit' />
    </Link>
  </EditLink>
)

export default EditLinkPost;