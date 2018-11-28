import postListReducer from './post-list-reducer';
import voteReducer from './vote-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  voteReducer: voteReducer,
  masterPostList: postListReducer
})

export default rootReducer;
