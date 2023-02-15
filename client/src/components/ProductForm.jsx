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
            <span className="input-group-text" id="inputGroup-sizing-default">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3" >
            <span className="input-group-text" id="inputGroup-sizing-default">
              Price
            </span>
            <input
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3" >
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
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
