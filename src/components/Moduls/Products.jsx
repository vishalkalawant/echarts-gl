import React, { useEffect, useState } from "react";
// import { Button, Card } from 'react-bootstrap'

const Products = ({ title }) => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <img alt="err" src={`${item.thumbnail}`} height="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
