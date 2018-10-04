import React from 'react';
import { connect } from 'react-redux';

// ACTIONS IMPORT
import { CONTENT_POSTS } from '../../actions/constants';
import ContentControl from '../content-control';
import { upvotePost, downvotePost } from '../../actions/posts';

// COMPONENTS IMPORT
import Vote from '../vote';
import CommentList from '../Comments/comment-list';

// UTILS IMPORT
import { formatDate } from '../../utils/helper';

// EXTERNAL LIBRARY
import { Row , Col } from 'react-bootstrap'

// IMAGES IMPORT
import ReduxImgActive from '../../images/reduxLogo.svg'
import ReactImgActive from '../../images/reactLogo.svg'
import UdacityImgActive from '../../images/udacityLogo.svg'

const PostDetail = (props) => {
  const { id, title, category, body, author, timestamp, voteScore, comments = [],
    onUpvotePost, onDownvotePost } = props;
  
  return (

      <div>

        <Row className='postBlock'>


                <Col md={1} className='imageCategory'>
                  {
                    category === 'react' && <img src={ReactImgActive} width={40} height={40} />
                  }
                  {
                    category === 'redux' && <img src={ReduxImgActive} width={40} height={40} />
                  }
                  {
                    category === 'udacity' && <img src={UdacityImgActive} width={40} height={40} />
                  }
                </Col>


                <Col md={9}>
                      <label className='postTitle'>{title}</label>
                      <label className='postDescription'>{body} </label>
                      <ul className='postDetails'>
                        <li>Author: <span>{author}</span></li>
                        <li>Post at: <span>{formatDate(timestamp)}</span></li>
                      </ul>
                </Col>


                <Vote
                  onUpvote={() => onUpvotePost(id)}
                  onDownvote={() => onDownvotePost(id)}
                  voteScore={voteScore}
                />    

            
        </Row>


        <Row className='postBlock'>
          <CommentList postId={id} comments={comments} />
        </Row>   
  
          

      </div>
 
  )
}

export default connect(
  undefined,
  { onUpvotePost: upvotePost, onDownvotePost: downvotePost }
)(PostDetail);