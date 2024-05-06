import { useState, useEffect } from "react";
import axios from "axios";

const JSprep = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  };

  const deleteLastProduct = async () => {
    const lastProduct = products[products.length - 1];
    axios
      .delete(`https://dummyjson.com/products/${lastProduct.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <>
      {products.map((ele) => {
        return (
          <table>
            <tr>
              <th style={{ paddingRight: "10px" }}>{ele.id}</th> {"  "}
              <th style={{ paddingRight: "10px" }}>{ele.title}</th> {"  "}
              <th style={{ paddingRight: "10px" }}>{ele.brand}</th> {"  "}
              <th style={{ paddingRight: "10px" }}>{ele.category}</th> {"  "}
              <img
                src={ele.thumbnail}
                style={{ width: "50px", height: "50px" }}
              />
              <button onClick={deleteLastProduct}> Delete</button>
            </tr>
          </table>
        );
      })}
    </>
  );
};

export default JSprep;
