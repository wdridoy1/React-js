import React, { useEffect, useState } from "react";
// ============================== components import ==============================
import Countries from "./countries";
import Search from "./search";

// ============================== Api link url ==============================
const url = "https://restcountries.com/v3.1/all";

function App() {
  // ============================== handle loading,error,countries data useState ==============================
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  // ============================== Api data fetch ==============================
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const responsive = await fetch(url);
      const data = await responsive.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  // ============================== useEffect fetch  Api url sent ==============================
  useEffect(() => {
    fetchData(url);
  }, []);

  const LoadingMessage = "Please wait data is loading...";

  // ============================== RemoveCountry button handle ==============================
  const RemoveCountry = (name) => {
    const filter = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filter);
  };

  // ============================== Search country handle ==============================
  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    const countriesNew = countries.filter((country) => {
      const countryNew = country.name.common.toLowerCase();
      return countryNew.startsWith(value);
    });
    setFilteredCountries(countriesNew);
  };

  // ============================== Output handle ==============================
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>{LoadingMessage}</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countriesData={filteredCountries}
          onRemoveCountry={RemoveCountry}
        />
      )}
    </div>
  );
}

export default App;
