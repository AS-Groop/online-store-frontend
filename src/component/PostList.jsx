import React from 'react';
import ListItem from './ListItem';

const PostList = ({ posts, remove}) => {
	if (!posts.length) {
		return(<p>Пока нет постов</p>)
	}
	return (
		<div className='post-list'>
			<h1>Posts about Js</h1>
			{posts.map((post, index)=><ListItem post={post} removePost={remove} index={index} key={post.id}/>)}
		</div>
	);
}

export default PostList;
