import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const postInfo =
  <div>
    <h3>{props.author}</h3>
    <h4>{props.title}</h4>
    <h4>{props.content}</h4>
    <h4>{props.voteValue}</h4>
    <h4>{props.timeStamp}</h4>
    <img src={props.imgUrl}/>
  </div>
  return(
    <div>{postInfo}</div>
  )
}

export default Post;
