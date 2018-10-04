import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// ACTIONS IMPORTS
import { getAllCategories } from '../actions/categories';
import { getAllPostsAndComments } from '../actions/posts';

// COMPONENTS IMPORTS
import Content from './2.Content';
import Sidebar from './1.Sidebar';
import ReadMe from './3.ReadMe.js'

// EXTERNAL LIBRARY
import { Grid } from 'react-bootstrap'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPostsAndComments();
  }

  render() {
    return (
        <Grid> 
            <Sidebar/>        
            <ReadMe />
            <Content/> 
        </Grid>
    );
  }
}

export default withRouter(connect(undefined,
  { fetchCategories: getAllCategories, fetchPostsAndComments: getAllPostsAndComments }
)(App));
