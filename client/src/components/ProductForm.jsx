import React from "react";
import { Formik } from "formik";

const ProductForm = () => {
  return (
    <>
      <Formik
        initialValues = {""}
      >
        <form className="container">
          <div className="input-group mb-3" >
            <span className="input-group-text" id="title">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Title input"
              aria-describedby="Product name input"
            />
          </div>
          <div className="input-group mb-3" >
            <span className="input-group-text" id="price">
              Price
            </span>
            <input
              type="number"
              className="form-control"
              aria-label="Price input"
              aria-describedby="Product price input"
            />
          </div>
          <div className="input-group mb-3" >
            <span className="input-group-text" id="description">
              Description
            </span>
            <textarea
              className="form-control"
              aria-label="Description"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary px-5">Create</button>
          </div>
        </form>
      </Formik>
    </>
  );
};

export default ProductForm;
