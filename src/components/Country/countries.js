import React from "react";
import { v4 as uuidv4 } from "uuid";

// ============================== components import ==============================
import Country from "./country";
import style from "./countrices.css";

const countries = (props) => {
  // data receive props
  const { countriesData } = props;
  return (
    // receive props data map
    <section className="countries">
      {countriesData.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          // sent data country components
          <Country
            {...countryNew}
            key={countryNew.id}
            onRemoveCountryDataSent={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
};

export default countries;
