import axios from "axios";
import { useEffect, useState } from "react";
import { Item } from "./Item";

const url = "/api/v1/items";

export const Items = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="">Products</h1>
        <a className="" href="/create">
          Create product
        </a>
      </div>

      <ul className="collection">
        {data.map((item) => (
          <li className="collection-item">
            <Item key={item._id} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
