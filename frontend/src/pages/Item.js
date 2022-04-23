import "../css/item.css";

export const Item = ({ item }) => {
  return (
    <>
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <span className="price">Price: {item.price}$</span>
    </>
  );
};
