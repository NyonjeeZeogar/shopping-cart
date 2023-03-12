import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
// import logo from './logo.svg';

import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleAdd(item) {
    item.addNumber = 1;
    const itemsArr = addedItems;
    setAddedItems([...itemsArr, item]);
  }

  function handleRemove(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItems(newItems);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
