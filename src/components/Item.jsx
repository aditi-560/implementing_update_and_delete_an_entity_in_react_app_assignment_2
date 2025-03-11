import React from "react";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const Item = ({ item, setItems }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${item.name}"?`);
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URI}/${item.id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Failed to delete item");

      // Remove the deleted item from state
      setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    } catch (error) {
      alert("Error deleting item: " + error.message);
    }
  };

  return (
    <li>
      <span>{item.name}</span>
      <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
        Delete ❌
      </button>
    </li>
  );
};

export default Item;
