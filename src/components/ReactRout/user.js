import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
const User = () => {
  const [searchParams, setEearchParams] = useSearchParams();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEearchParams({ name: name });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default User;
