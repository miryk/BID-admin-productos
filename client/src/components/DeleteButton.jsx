import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const DeleteButton = ({id, successCallback, title}) => {

  const deleteProduct = async (prod_id) => {
    // console.log(`Delete this product: ${prod_id}`);
    try {
      await axios.delete(`${import.meta.env.VITE_REACT_API_URL}/delete/${prod_id}`);
      successCallback();
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Ops!!!',
        text: `Error: ${err?.response?.data?.message || err.message}`,
    })
    }
  }

  const confirmDelete = (prod_id, title) => {
    Swal.fire({
      title: 'Are you sure?',
            text: `You are going to delete ${title}!!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.isConfirmed) {
        deleteProduct(prod_id);
      }
    })
  }

  return (
    <button className="btn btn-danger ms-2" onClick={()=> confirmDelete(id, title)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    </button>
    );
};

export default DeleteButton;
