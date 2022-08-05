import React from "react";

// ============================== components import ==============================
import style from "./country.css";

const country = (props) => {
  // data receive props
  const { country } = props;
  const { name, flags, capital, area, population } = country;
  // RemoveCountry button data sent
  const handleRemoveCountry = (name) => {
    props.onRemoveCountryDataSent(name);
  };
  return (
    <article className="country">
      <div>
        <img className="flag" src={flags.png} alt={name.common} />
        <h3>Name : {name.common}</h3>
        <h3>Capital : {capital}</h3>
        <h3>Area : {area}</h3>
        <h3>Population : {population}</h3>
        <button
          className="btn"
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default country;
