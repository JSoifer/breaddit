
export default (state = {}, action) => {
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
  default:
    return state;
  }
};
