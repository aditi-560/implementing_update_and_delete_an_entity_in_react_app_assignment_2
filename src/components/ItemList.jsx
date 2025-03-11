import React from "react";
import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <div>
      <h2>Doors List</h2>
      {items.length === 0 ? (
        <p>No doors available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} setItems={setItems} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
