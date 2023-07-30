// import "./App.css";
import "../css/styles.css";
import Navbar from "./common/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("https://dummyjson.com/products/" + id).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {console.log(product)}
      <main>
        <main class="centered">
          <h1>{product.title}</h1>
          <hr />
          <div>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
        </main>
      </main>
    </div>
  );
}

export default Product;
