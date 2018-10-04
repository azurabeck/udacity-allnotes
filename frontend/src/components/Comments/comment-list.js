import React, { Component } from 'react';

// ACTION IMPORT
import { CONTENT_COMMENTS } from '../../actions/constants';

// COMPONENT IMPORT
import Sorter from '../sorter';
import Comment from './comment';
import CommentForm from './comment-form';

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class CommentList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      displayForm: false,
      commentToEdit: {}
    }
    this.showCommentForm = this.showCommentForm.bind(this);
    this.hideCommentForm = this.hideCommentForm.bind(this);
  }

  filterCommentById(comments, id) {
    return comments.filter(comment => comment.id === id);
  }

  showCommentForm(comment) {
    this.setState({ displayForm: true, commentToEdit: comment });
  }

  hideCommentForm() {
    this.setState({ displayForm: false, commentToEdit: {} });
  }

  render() {
    const { postId, comments } = this.props;
    const { displayForm, commentToEdit } = this.state;
  
    return (

      <div>
   
        <Row  className='commentHeader'>

            <Col md={8}><label className='title colorYellow'>Comments</label></Col>  
            <Col md={4}> <Sorter content={CONTENT_COMMENTS} /></Col>

        </Row>
   
        <Row className='commentList'>
        
            {comments.length === 0 ? 
              <label className='msgCommentNull'>Darn, looks like nobody cares about this post! =( </label>
              :
              comments.map(comment => 
                <Comment
                  key={comment.id}
                  showEditCommentForm={(event) => {
                    event.preventDefault();
                    this.showCommentForm(comment)
                    }}
                  {...comment}
                />)
            }
        
        </Row>
   

        <a className='buttonAddComment' onClick={(event) => {
          event.preventDefault();
          this.showCommentForm();
          }}>
          
          <MaterialIcon icon='add' color='#fff'/>

        </a> 

                      
          {displayForm && 
              <CommentForm
                initialValues={commentToEdit}
                hideForm={this.hideCommentForm}
                id={commentToEdit && commentToEdit.id}
                postId={postId}
          />}
        
   
      </div>

    )
  }
}

export default CommentList;