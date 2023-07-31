import React, { useState } from 'react';
import MyInput from './MyInput';
import MyButton from './MyButton';

const PostForm = ({change, ...props}) => {
    const [newPost, setNewPost] = useState({
        title: '',
        info: '',
        id: Date.now()
    })

    function submit(e) {
        e.preventDefault()
        setNewPost({...newPost, id: Date.now()})
        change(newPost)
        setNewPost({title: '', info: '', id: Date.now()})
    }

    return (
        <form className='form'>
            <MyInput value={newPost.title} onChange={(e)=>setNewPost({...newPost, title: e.target.value})} placeholder="Title"/>
            <MyInput value={newPost.info} onChange={(e)=>setNewPost({...newPost, info: e.target.value})} placeholder="Info"/>
            <MyButton onClick={submit} type="submit">Create</MyButton>
        </form>
    );
}

export default PostForm;
