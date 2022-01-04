import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const [posts, setPosts] = useState([]);

    const {postId} = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPosts(data[0]))
    }, [])
   
    return (
        <div>
            <h1>{postId}</h1>
        </div>
    );
};

export default PostDetails;