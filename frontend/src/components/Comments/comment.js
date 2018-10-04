import React from 'react';
import { connect } from 'react-redux';

// ACTIONS IMPORT
import { upvoteComment, downvoteComment } from '../../actions/comments';
import { CONTENT_COMMENTS } from '../../actions/constants';

// COMPONENTS IMPORT
import ContentControl from '../content-control';
import Vote from '../vote';

// UTILS IMPORT
import { formatDate } from '../../utils/helper';

// EXTERNAL LIBRARY
import { Row, Col } from 'react-bootstrap'

const Comment = ({ id, body, author, timestamp, voteScore,
  onUpvoteComment, onDownvoteComment, onDelete, showEditCommentForm }) => {
  return (
    <Row className='commentUser'>
     

      <Col md={10}>      
                
            <label className='postDescription comment'>{body} </label>

            <ul className='postDetails'>
                <li>Author: <span>{author}</span></li>
                <li>Post at: <span>{formatDate(timestamp)}</span></li>
            </ul>
      
      </Col>

      <Vote
        voteScore={voteScore}
        onUpvote={() => onUpvoteComment(id)}
        onDownvote={() => onDownvoteComment(id)}
      />


      <Col md={12}>
      
            <ContentControl type={CONTENT_COMMENTS} id={id} showForm={showEditCommentForm} />
      
      </Col>

    </Row>
  )
}

export default connect(
  undefined,
  { onUpvoteComment: upvoteComment, onDownvoteComment: downvoteComment }
)(Comment);