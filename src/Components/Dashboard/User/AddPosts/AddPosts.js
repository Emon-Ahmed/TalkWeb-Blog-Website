import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPosts.css';

const AddPosts = () => {
  
 /* useForm state declare */
 const { register, handleSubmit, reset } = useForm();

 /* onSubmit handle declare */
 const onSubmit = data => {
     console.log(data);
     axios.post('http://localhost:5000/posts', data )
     .then(res => {
         if(res.data.insertedId) {
             alert('added successfully');
             reset();
         }
     })
 }

    return (
        <div className="container add-post">
      
        <h1 >Please Write Your Blog!</h1>
       
      {/* add Product form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("picture")} placeholder="Post image link"/>
            <input type='text' {...register("name")} placeholder="Enter Your Name"/>
            <input type='text' {...register("email")} placeholder="Enter Email"/>
            {/* <input type='text' {...register("name") } defaultValue={user?.displayName} placeholder="Your Name"/> */}
            <textarea type="text" {...register("posts", { required: true, maxLength: 1000 })} placeholder="Write Your Post" />                  
            <input className="submit-button" type="submit" />
        </form>
  </div>
    );
};

export default AddPosts;