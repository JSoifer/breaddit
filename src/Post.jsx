import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import './Post.scss';
import {Icon} from 'react-materialize';
import {connect} from 'react-redux';

function Post(props) {
  function voteForPost(postId, target) {
    const { dispatch } = props;
    if (target === "plus-vote-button"){
      const action = {
        type: 'UP_VOTE',
        postId: postId
      }
      dispatch(action);
    } else if (target === "minus-vote-button") {
      const action = {
        type: 'DOWN_VOTE',
        postId: postId
      }
      dispatch(action);
    }
  }

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
        <div onClick={(event) => {voteForPost(props.id, event.target.className);}} className="plus-vote-button">
          <Icon small>add_circle_outline</Icon>
        </div>
        <h4>{props.voteValue}</h4>
                <div onClick={(event) => {voteForPost(props.id, event.target.className);}} className="minus-vote-button">
        <Icon small>remove_circle_outline</Icon>
        </div>
      </div>
    </div>

  </div>
  return(
    <div>{postInfo}</div>
  )
}

export default connect()(Post);
