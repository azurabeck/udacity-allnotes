import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

// ACTION IMPORT
import { createComment, editComment } from '../../actions/comments';

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'

const CommentForm = (props) => {
  const { id, postId, hideForm, handleSubmit, pristine, submitting, createComment, editComment } = props;

  return (

    <div className='formAddComment'>
      <form className='form comment' onSubmit={handleSubmit(data => {
          const { author, body } = data;
          data = { author, body };
          if (id) {
            editComment(id, data);
          } else {
            createComment(postId, data);
          }
          hideForm();
        })}>

        

        <label className='formPageTitle comment'>
          <span className='colorYellow'>
            {
              id ? 'Editing ' : 'Creating '
            }
          </span>
          Your comment
        </label> <br />


        <Row className='formPopup'>
          <div className='formBlock'>
            <label className='formTitle'>Author</label>
            <div className='formInput'>
              <Field
                name='author'
                component='input'
                type='text'
                placeholder='your nickname'
              />
            </div>
          </div>

          <div className='formBlock'>
            <label className='formTitle'>Body</label>
            <div className='formInput'>
              <Field
                name='body'
                component='textarea'
                placeholder='type in your crazy thoughts here'
              />
            </div>
          </div>

          <div className='formButton'>
            <button className='back' type='button' onClick={hideForm}>
              Cancel
            </button>
              <button className='enter' type='submit' disabled={pristine || submitting}>
                Submit
            </button>
          </div>

        </Row>       
      
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'comment',
  enableReinitialize: true
})(connect(
  undefined,
  { createComment, editComment }
)(CommentForm));