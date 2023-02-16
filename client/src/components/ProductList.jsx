import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = ({products}) => {
  const [productsState, setproductsState] = useState(products);

  const deleteProduct = async () => {
    const respuesta = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
    setproductsState(respuesta.data);
  }

  return (
    <div>
      <h1 className='text-center mt-5'>All Products List</h1>
      <div className='list-group'>
      {productsState.map((item, idx )=> {
        return (
          <div key={item.title+idx} className="list-group-item d-flex align-items-center">
            <Link to={`/${item._id}`} className="text-decoration-none text-reset flex-grow-1">{item.title}</Link>
            <DeleteButton id={item._id} successCallback={deleteProduct}/>
          </div>
        )
      })}
      </div>
      
    </div>
  )
}

export default ProductList