import React, { useEffect, useState } from "react";
import Products from "./products";
import Search from "./Search";
const url = "https://fakestoreapi.com/products";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ecommerces, setEcommerces] = useState([]);
  const [ecommercesProduct, setecommercesProduct] = useState(ecommerces);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const responsive = await fetch(url);
      const data = await responsive.json();
      setEcommerces(data);
      setecommercesProduct(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const loadingMessage = "Please wait Product is Loading...";

  const handleSearch = (searchValue) => {
    const searchValueText = searchValue.toLowerCase();
    const searchNew = ecommerces.filter((product) => {
      const searchProductNew = product.title.toLowerCase();
      return searchProductNew.startsWith(searchValueText);
    });
    setecommercesProduct(searchNew);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>E-commerce</h1>
      <Search searchProduct={handleSearch} />
      {isLoading && <h2>{loadingMessage}</h2>}
      {error && <h2>{error.message}</h2>}
      {ecommerces && <Products products={ecommercesProduct} />}
    </div>
  );
};

export default App;
