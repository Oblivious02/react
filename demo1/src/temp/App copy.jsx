import "./App.css";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="App">
      {console.log(products)}
      <div className="container">
        {products.map((product) => {
          return (
            <article class="card product-item">
              <header class="card__header">
                <h1 class="product__title">{product.title}</h1>
              </header>
              <div class="card__image">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div class="card__content">
                <h2 class="product__price">${product.price}</h2>
                <p class="product__description">{product.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default App;
