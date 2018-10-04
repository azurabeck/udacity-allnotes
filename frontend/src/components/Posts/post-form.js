import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

// ACTIONS IMPORT
import { createPost, editPost } from '../../actions/posts';

// UTILS IMPORT
import { capitalizeFirst } from '../../utils/helper';

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'


const PostForm = (props) => {
  const { handleSubmit, pristine, submitting, categories, createPost, editPost, history, match } = props;
  const isEdit = match.url.indexOf('edit') !== -1;

  return (
    <div>

      <label className='formPageTitle'>
        <span className='colorYellow'>
          {
            isEdit ? 'Edit ' : 'Create '
          }
        </span>
        post
      </label>

      <form className='form' onSubmit={handleSubmit(data => {
        const { title, body, category = categories[0].name, author } = data;
        data = { title, body, category, author };
        if (isEdit) {
          editPost(match.params.id, data);
        } else {
          createPost(data);
        }
        history.goBack();
      })}
      >
        
        <Row>
            <Col md={6} className='formField'>
            
                <div className='formBlock'>
                  <label className='formTitle'>Title</label>
                  <div className='formInput'>
                    <Field
                      name='title'
                      component='input'
                      type='text'
                      placeholder='Super duper awesome title'
                    />
                  </div>
                </div>


                <div className='formBlock'>
                  <label className='formTitle'>Author</label>
                  <div className='formInput'>
                    <Field
                      name='author'
                      component='input'
                      type='text'
                      placeholder='Name that is going to be famous!'
                    />
                  </div>
                </div>


                <div className='formBlock'>
                  <label className='formTitle'>Category</label>
                  <div className='formInput'>
                    <Field name='category' component='select'>
                      {categories.map((category, index) =>
                        <option key={index} value={category.name}>{capitalizeFirst(category.name)}</option>
                      )}
                    </Field>
                  </div>
                </div>
            
            </Col>
            <Col md={6} className='formField'>
            
                <div className='formBlock'>
                  <label className='formTitle'>Body</label>
                  <div className='formInput'>
                    <Field
                      name='body'
                      component='textarea'
                      placeholder='Write your life story here'
                    />
                  </div>
                </div>            
            
            </Col>
        </Row>
             
        <div className='formButton'>
          <button className='back' type='button' onClick={() => history.goBack()}>
            Back
          </button>
          <button className='enter' type='submit' disabled={pristine || submitting}>
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default reduxForm({
  form: 'post'
})(withRouter(connect(mapStateToProps,
  { createPost, editPost }
)(PostForm)));