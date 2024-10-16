import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://talkweb-blog-website-server.onrender.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="container add-product">
      <h2>Please Add A Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-floating mb-3">
          <input
            {...register("picture")}
            placeholder="Image Link"
            type="text"
            class="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Image Link</label>
        </div>
        <div class="form-floating mb-3">
          <input
            {...register("name", { required: true, maxLength: 40 })}
            placeholder="Products Name"
            type="text"
            class="form-control"
            id="floatingInput"
          />
          <label for="floatingInput">Post Title</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            {...register("price")}
            placeholder="Enter Price"
            class="form-control"
            id="floatingPassword"
          />
          <label for="floatingPassword">Enter Price</label>
        </div>
        <div class="form-floating mb-3">
          <input
            {...register("about")}
            placeholder="Products Description"
            class="form-control"
            id="floatingPassword"
          />
          <label for="floatingPassword">Products Description</label>
        </div>
        <input
          class="btn btn-outline-dark active my-2 py-2 px-5"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
