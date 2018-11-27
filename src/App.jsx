import React from 'react';
import './App.scss';
import {Navbar, NavItem} from 'react-materialize';
import PostList from './PostList';
import AddPost from './AddPost';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <Navbar brand='BREADDIT' right>
          <NavItem onClick={() => console.log('test click')}>FORUM</NavItem>
          <NavItem href='components.html'>ADD POST</NavItem>
        </Navbar>
        <div>
          <PostList postList={this.props.masterPostList}/>
          <AddPost />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

export default connect(mapStateToProps)(App);
