import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddPosts = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://talkweb-blog-website-server.onrender.com/posts", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="container add-post">
      <h2>Please Write Your Blog!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-floating mb-3">
          <input
            {...register("picture")}
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Image Link"
          />
          <label for="floatingInput">Image Link</label>
        </div>
        <div class="form-floating mb-3">
          <input
            {...register("name")}
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Post Title"
          />
          <label for="floatingInput">Post Title</label>
        </div>
        <div class="form-floating">
          <input
            {...register("posts", { required: true, maxLength: 1000 })}
            type="textarea"
            class="form-control"
            id="floatingPassword"
            placeholder="Write Your Post"
          />
          <label for="floatingPassword">Write Your Post</label>
        </div>
        <input
          class="btn btn-outline-dark active my-2 py-2 px-4"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPosts;
