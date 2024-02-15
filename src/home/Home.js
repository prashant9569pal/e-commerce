import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [prices, setPrice] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [navigate]);

  console.log(products);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
        <div className="container">
          <a className="navbar-brand" href="#">
            ShopKaro
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <input
              className="form-control me-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="d-flex align-items-center">
              <button className="btn btn-link">
                {counter > 0 && (
                  <span className="badge bg-danger rounded-circle ms-2">
                    {counter}
                  </span>
                )}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  onClick={(counter) => {
                    setCounter(0);
                  }}
                  size="2x"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar with Range */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <p className="mb-0 me-2">Select the Price Range</p>
          <button type="button" class="btn btn-info">
            Price: {prices}
          </button>
          <div className="flex-grow-1">
            <input
              type="range"
              className="form-range"
              min="0"
              max="2000"
              step="1"
              id="customRange3"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          {products
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .filter((val) => {
              if (prices === 0) return val;
              else if (val.price <= prices) return val;
            })
            .map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard
                  product={product}
                  counter={counter}
                  setCounter={setCounter}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
