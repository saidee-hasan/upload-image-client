import React, { useState } from "react";

const Imgbb = () => {
  const [img, setImg] = useState(" ");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = new FormData();
    data.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=0e32791b26cbe3ec3f996038948f01a7",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => setImg(data));
  };
  console.log(img.data.url);
  return (
    <div>
      <form onSubmit={handleSubmit} class="row g-3">
        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">
            File
          </label>
          <input
            name="image"
            type="file"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Confirm identity
          </button>
        </div>

      </form>
      <img src={img.data.url} alt="" />
    </div>
  );
};

export default Imgbb;
