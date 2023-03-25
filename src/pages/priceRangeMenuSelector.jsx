import { useState, useEffect } from "react";

const MenuApp = ({ menu }) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState([]);

  const handleOrder = (item) => {
    setTotal(total + item.price);
  };

  const clearOrder = () => {
    setTotal(0);
  };

  const orderedItems = menu.filter((item) => item.ordered);

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  useEffect(() => {
    const filteredMenu = menu.filter((item) => item.price <= price);
    let selectedItems = [];

    while (
      selectedItems.reduce((total, item) => total + item.price, 0) < price
    ) {
      const availableItems = filteredMenu.filter(
        (item) => !selectedItems.includes(item)
      );
      if (availableItems.length === 0) break;
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      selectedItems.push(availableItems[randomIndex]);
    }

    setSelectedMenu(selectedItems);
  }, [menu, price]);

  return (
    <div>
      <h1>Menu</h1>
      <form>
        <label htmlFor="price">金額:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={handlePriceChange}
        />
      </form>
      <ul>
        {selectedMenu.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}円{" "}
            <button onClick={() => handleOrder(item)}>注文</button>
          </li>
        ))}
      </ul>
      <h2>注文済み</h2>
      <ul>
        {orderedItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}円
          </li>
        ))}
      </ul>
      <h2>合計: {total}円</h2>
      <button onClick={clearOrder}>クリア</button>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`pages/api/menu.json`);
  const menu = await res.json();

  return {
    props: {
      menu,
    },
  };
}

export default MenuApp;
