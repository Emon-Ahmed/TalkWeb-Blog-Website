import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [posts, setPosts] = useState([]);

  const { postId } = useParams();
  useEffect(() => {
    fetch(`https://pacific-escarpment-25603.herokuapp.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPosts(data[0]));
  }, []);

  return (
    <div>
      <div className="bg-white p-4 text-center my-3">
        <h1 className="py-3">{posts.name}</h1>
        <img src={posts.picture} className="w-75 my-2" alt="" />
        <p className="text-secondary py-5">{posts.posts}</p>
      </div>
    </div>
  );
};

export default PostDetails;
