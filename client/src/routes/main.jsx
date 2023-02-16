import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ProductEdit from '../pages/ProductEdit';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Error. Not found</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: "/:id",
        element: <ProductDetails />
      },
      {
        path: "/:id/edit",
        element: <ProductEdit />
      }
    ]
  }
])