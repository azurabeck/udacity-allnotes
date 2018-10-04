import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// ACTION IMPORTS
import { upvotePost, downvotePost } from '../../actions/posts';
import { CONTENT_POSTS } from '../../actions/constants';

// UTILS IMPORT
import { formatDate } from '../../utils/helper';

// COMPONENTS IMPORT
import Vote from '../vote';
import ContentControl from '../content-control';

// EXTERNAL LIBRARY
import { Grid, Row, Col } from 'react-bootstrap'

// IMAGES IMPORT
import ReduxImgActive from '../../images/reduxLogo.svg'
import ReactImgActive from '../../images/reactLogo.svg'
import UdacityImgActive from '../../images/udacityLogo.svg'

const PostSummary = ({ id, category, title, author, body, timestamp, comments = [], voteScore, onUpvotePost, onDownvotePost }) => (

  <Grid>

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
          <Link to={`/posts/${id}`}>
            <label className='postTitle'>{title}</label>
          </Link>
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

        
     <ContentControl type={CONTENT_POSTS} id={id} commentsCount={comments.length} />

    </Row>

  </Grid>

)

export default connect(
  undefined,
  { onUpvotePost: upvotePost, onDownvotePost: downvotePost }
)(PostSummary);