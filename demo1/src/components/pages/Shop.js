import "../css/styles.css";
import Navbar from "./common/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div className="App">
      {console.log(products)}
      <Navbar />
      <main>
        <div class="grid">
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
                  <p class="product__description">This is an awesome book!</p>
                </div>
                <div class="card__actions">
                  <form action={"/product/" + product.id}>
                    <button class="btn" type="submit">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Shop;
