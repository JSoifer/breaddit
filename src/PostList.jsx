import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  console.log(props)
  return(
    <div>
      {Object.keys(props.postList).map(function(postId) {
        let post = props.postList[postId];
        return <Post author={post.author}
          imgUrl={post.imgUrl}
          title={post.title}
          content={post.content}
          voteValue={post.voteValue}

          id={post.id}
          key={post.id}/>
      })}
    </div>
  )
}

PostList.propTypes = {
  postList: PropTypes.object
}

export default PostList;
