import React from 'react';

// COMPONENTS IMPORT
import EditLink from '../edit-link';

// EXTERNAL LIBRARY
import MaterialIcon from 'material-icons-react'

const EditLinkComment = ({ showForm }) => (
  <EditLink>
    <a onClick={showForm}>
      <MaterialIcon icon='edit' />
    </a>
  </EditLink>
)

export default EditLinkComment;