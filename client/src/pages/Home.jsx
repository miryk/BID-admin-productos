import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import Swal from "sweetalert2";
import axios from "axios";
import ProductList from "../components/ProductList";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const list = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
      setProductList([...list.data]);
    };
    getData();
  }, []);

  const initialValues = {
    title: "",
    price: 10,
    description: "",
  };

  const updateList = async () => {
    console.log("updateList")
    const list = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
    console.log(list.data)
    setProductList([...list.data]);
  } 

  const addProduct = async (values, actions) => {
    try {
      const respuesta = await axios.post(
        `${import.meta.env.VITE_REACT_API_URL}/add`,
        values
      );

      if (respuesta.status == 200) {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha agregado ${respuesta.data.title} perfectamente!`,
        });
        actions.resetForm(initialValues);
        // await updateList();
        const list = await axios.get(`${import.meta.env.VITE_REACT_API_URL}`);
        setProductList([...list.data]);
      }

    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Ops que mal!!!",
        text: `Error: ${err?.response?.data?.message || err.message}`,
      });
    }
  };

  return (
    <div>
      <h1 className="text-center my-3">Product Manager</h1>
      <ProductForm onSubmit={addProduct} initialValues={initialValues} btnText="Create"/>
      <ProductList products={productList} setList={setProductList} />
    </div>
  );
};

export default Home;
