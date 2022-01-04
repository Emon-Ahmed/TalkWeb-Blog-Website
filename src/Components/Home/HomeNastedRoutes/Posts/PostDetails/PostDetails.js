import React, {useState} from 'react';
import './PostDetails.css';

const PostDetails = () => {
    const [posts, setPosts] = useState([]);


    // useEffect use and fatch call api
    useEffect(() => {
        fetch(`http://localhost:5000/posts`)
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>PostDetails</h1>
            
        </div>
    );
};

export default PostDetails;