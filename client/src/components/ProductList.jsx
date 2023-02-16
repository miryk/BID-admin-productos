import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
  
  return (
    <div>
      <h1 className='text-center mt-5'>All Products List</h1>
      <div className='list-group'>
      {products.map((item, idx )=> {
        return (
          <Link to={`/${item._id}`} key={item.title+idx} className="list-group-item list-group-item-action">{item.title}</Link>
        )
      })}
      </div>
    </div>
  )
}

export default ProductList