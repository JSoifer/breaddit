
export default (state = {}, action) => {
  let newPost;
  switch (action.type) {
    case 'ADD_POST':
    const { author, imgUrl, title, content, voteValue, timeStamp, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        author: author,
        imgUrl: imgUrl,
        title: title,
        content: content,
        voteValue: voteValue,
        timeStamp: timeStamp,
        id: id
      }
    });
    return newState;
    case 'UP_VOTE':
      newPost = Object.assign({}, state[action.postId]);
      newPost.voteValue += 1;
      newState = Object.assign({}, state, {
        [action.postId]: newPost
      });
      return newState;
    case 'DOWN_VOTE':
      newPost = Object.assign({}, state[action.postId]);
      newPost.voteValue -= 1;
      newState = Object.assign({}, state, {
        [action.postId]: newPost
      });

      return newState;
  default:
    return state;
  }
};
