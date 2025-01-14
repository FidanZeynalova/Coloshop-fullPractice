import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import { useGetAllProductsQuery, usePostProductMutation } from '../App/Slices/ColoshopSlices';
import {Helmet} from "react-helmet";

const validationSchema = Yup.object({
  image: Yup.string()
    .url('Invalid URL')
    .required('Image URL is required'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Product name is required'),
  price: Yup.number()
    .positive('Price must be positive')
    .required('Price is required'),
});

function Add() {
  let {refetch} = useGetAllProductsQuery()
  let [postProduct] = usePostProductMutation()
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      price: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    postProduct(values)
    refetch()
    navigate("/")
    },
  });

  return (
  <>
  <Helmet>
  <link rel="icon" type="image/svg+xml" href="https://is.gd/Z46fDL" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add Page</title>
  </Helmet>
    <div className='Add'>
      <div className="container">
        <h1>Add Product</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <input
              type="text"
              placeholder="Add New Product Image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <div style={{ color: 'red' }}>{formik.errors.image}</div>
            ) : null}
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Add New Product Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: 'red' }}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="input">
            <input
              type="number"
              placeholder="Add New Product Price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price ? (
              <div style={{ color: 'red' }}>{formik.errors.price}</div>
            ) : null}
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  </>
  );
}

export default Add;
