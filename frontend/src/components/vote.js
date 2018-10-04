import React from 'react';

//EXTERNAL LIBRARY
import { Col } from 'react-bootstrap'

const Vote = ({ voteScore, onUpvote, onDownvote }) => (

  <Col md={2} className='newVote'>
    <label className='isThis'>Is this...?</label><br />         

    {
      voteScore === 0 && <label className='score borderYellow'>{voteScore}</label>
    }
    {
      voteScore > 0 && <label className='score borderGreen'>{voteScore}</label>
    }
    {
      voteScore < 0 && <label className='score borderRed'>{voteScore}</label>
    }
    
    <br />
    <label className='godVote' onClick={onUpvote}>good</label>
    <span>or</span>
    <label className='badVote' onClick={onDownvote}>bad</label>
    <label className='postVote'>post vote!</label>      
  </Col>
)

export default Vote;