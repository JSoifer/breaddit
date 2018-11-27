import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './Post.scss';
import {Icon} from 'react-materialize';
import {connect} from 'react-redux';

function Post(props) {
  function voteForPost(postId, vote) {
    
  }
  console.log(props.imgUrl)
  const postInfo =
  <div className="post">
    <div className="left-wrapper">
    <div className="post-meta">
      <img src={props.imgUrl}/>
      <h3>{props.author}</h3>
    </div>
    <div className="post-content">
      <h4>{props.title}</h4>
      <h4>{props.content}</h4>
    </div>
  </div>
    <div className="date-vote">
      <h4>Time here</h4>
      <div className="voting-ui">
      <Icon className="plus-vote-button" small>add_circle_outline</Icon>
      <h4>{props.voteValue}</h4>
      <Icon className="minus-vote-button" small>remove_circle_outline</Icon>
      </div>
    </div>

  </div>
  return(
    <div>{postInfo}</div>
  )
}

export default connect()(Post);
