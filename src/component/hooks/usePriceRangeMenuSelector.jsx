import { useState, useEffect } from "react";
import menuData from "pages/api/menu.json";

export const usePriceRangeMenuSelector = () => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(1000); // デフォルトは1000円
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);

  const calculateMenu = (menuData, price) => {
    let availableItems = menuData.filter((item) => item.price <= price);
    let selectedItems = [];
    let totalPrice = 0;

    while (availableItems.length > 0 && totalPrice < price) {
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const selectedItem = availableItems.splice(randomIndex, 1)[0];
      selectedItems.push(selectedItem);
      totalPrice += selectedItem.price;
    }

    if (totalPrice > price) {
      selectedItems.pop();
    }

    return selectedItems;
  };

  useEffect(() => {
    setSelectedMenu(calculateMenu(menuData, price));
  }, [price]);

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
    setSelectedMenu(calculateMenu(menuData, parseInt(e.target.value)));
  };

  const clearMenu = () => {
    setSelectedMenu(calculateMenu(menuData, price));
  };

  const handleOrder = (item) => {
    setTotal(total + item.price);
    setOrderedItems((prevItems) => [...prevItems, item]);
  };

  const addOneMore = (item) => {
    setTotal(total + item.price);
    setOrderedItems((prevItems) => [...prevItems, item]);
  };

  const clearOne = (item) => {
    const index = orderedItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const removedItem = orderedItems[index];
      const newItems = [...orderedItems];
      newItems.splice(index, 1);
      setTotal(total - removedItem.price);
      setOrderedItems(newItems);
    }
  };

  const clearOrder = () => {
    setTotal(0);
    setOrderedItems([]);
  };

  return {
    total,
    price,
    selectedMenu,
    orderedItems,
    handlePriceChange,
    clearMenu,
    handleOrder,
    addOneMore,
    clearOne,
    clearOrder,
  };
};
