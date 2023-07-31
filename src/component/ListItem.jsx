import React from 'react';
import MyButton from './MyButton';

const ListItem = ({ post, index, removePost}) => {
  return (
    <div className='list-item'>
      <div>
        <div className='title'>{index+1}. {post.title}</div>
        <div className='description'>{post.info}</div>
      </div>
      <MyButton onClick={()=>removePost(post.id)}>Delete</MyButton>
    </div>
  );
}

export default ListItem;
