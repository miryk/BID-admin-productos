import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ProductForm from "../components/ProductForm";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } =  useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/${id}`);
      setProduct(response.data);
    }
  getData();
  }, [])
  
  const editProduct = async (values, actions) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_REACT_API_URL}/update/${id}`, values);
      if (response.status == 200) {
        Swal.fire({
          icon: 'success',
          title: 'GENIAL!!!',
          text: `Se ha actualizado ${response.data.title} perfectamente!`,
      });
      navigate(`/${id}`)
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Ops que mal!!!',
        text: `Error: ${err?.response?.data?.message || err.message}`,
    })
    }
  }

  return (
  <div>
    <Link to={`/${product?._id}`} className="btn btn-secondary mb-3">Back</Link>
    <h1 className="text-center mb-3">Edit Product</h1>
    {!product ? <div>Cargando...</div>:
    <ProductForm 
      initialValues={product}
      onSubmit={editProduct}
      btnText="Edit"
      />
    }

  </div>
  )
};

export default ProductEdit;
