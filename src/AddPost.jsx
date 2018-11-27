import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import {v4} from 'uuid';
import {Input, Container, Button} from 'react-materialize';

function AddPost(props) {
  let _author = null;
  let _imgUrl = null;
  let _title = null;
  let _content = null;

  function handlePostSubmit(event) {
    const {dispatch} = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      author: _author.input.value,
      imgUrl: _imgUrl.input.value,
      title: _title.input.value,
      content: _content.input.value,
      voteValue: 0,
      timeStamp: new Moment(),
      id: v4()
    };
    dispatch(action);
    _author.value = '';
    _imgUrl.value = '';
    _title.value = '';
    _content.value = '';
  }

  return (
    <Container>
      <form onSubmit={handlePostSubmit}>
      <Input id="author" ref={(input) => {_author = input;}} s={12} placeholder="Your Handle"></Input>
        <Input id="title" ref={(input) => {_title = input;}} s={12} placeholder="Title of Post"></Input>
        <Input id="imgUrl" s={12} ref={(input) => {_imgUrl = input;}} placeholder="Paste Link to Image"></Input>
        <Input type="textarea" ref={(textarea) => {_content = textarea;}} id="content" s={12} placeholder="Your Post"></Input>
        <Button type="submit" waves='light'>Submit</Button>
      </form>
    </Container>
  )
}

export default connect()(AddPost);
