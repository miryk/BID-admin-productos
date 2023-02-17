import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ProductErrors = Yup.object().shape({
  title: Yup.string()
    .min(3, "Title needs at least 3 characters")
    .max(100, "Title is too long")
    .required("Required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be positive a number"),
  description: Yup.string()
    .min(5, "Description must be longer than 5 characters")
    .max(255, "Description is too long"),
});

const ProductForm = ({ onSubmit, initialValues, btnText }) => {

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={ProductErrors}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isValid, dirty }) => (
          <Form>
            <div>
              <div className="input-group">
                <span className="input-group-text" id="title">
                  Title
                </span>
                <Field
                  name="title"
                  className="form-control"
                  placeholder="Product title"
                />
              </div>
              {touched.title && errors.title ? (
                <span className="text-danger ms-3">{errors.title}</span>
              ) : (
                <div className="mt-4"></div>
              )}
            </div>
            <div>
              <div className="input-group">
                <span className="input-group-text" id="price">
                  Price 
                </span>
                <Field name="price" className="form-control" placeholder={0} />
                <span className="input-group-text">$</span>
              </div>
              {touched.price && errors.price ? (
                <span className="text-danger ms-3">{errors.price}</span>
              ) : (
                <div className="mt-4"></div>
              )}
            </div>
            <div>
              <div className="input-group">
                <span className="input-group-text" id="description">
                  Description
                </span>
                <Field
                  as="textarea"
                  name="description"
                  className="form-control"
                  placeholder="i.e.: Cotton T-shirt"
                />
              </div>
              {touched.description && errors.description ? (
                <span className="text-danger ms-3">{errors.description}</span>
              ) : (
                <div className="mt-4"></div>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-success px-5 mb-3">
                {btnText}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProductForm;
