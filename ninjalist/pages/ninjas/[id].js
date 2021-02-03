import React from "react";

export const getStaticPath = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(ninja => ({ paths: { id: ninja.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Ninja details</h1>
    </div>
  );
};

export default Details;
