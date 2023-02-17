import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/${id}`);
      setProduct(response.data);
    }
  getData();
  }, [])
  
  const deleteProduct = () => {
    navigate('/');
  }
  
  return (
  <div className="card">
    <div className="card-body">
      <h1>Product: {product.title}</h1>
      <h3>Price: ${product.price}</h3>
      <p>Description: {product.description}</p>
      <div>
        <Link to={`/${product._id}/edit`} className="btn btn-warning me-2 px-3">Edit</Link>
        <Link to={"/"} className="btn btn-secondary px-3">Back</Link>
        <DeleteButton id={product._id} successCallback={deleteProduct} title={product.title}/>
      </div>
    </div>
  </div>
  )
};

export default ProductDetails;
