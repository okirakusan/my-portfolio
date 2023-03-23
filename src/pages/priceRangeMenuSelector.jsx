import { useState } from "react";

const MenuApp = ({ menu }) => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(1000); // デフォルトは1000円

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
        {menu.map((item) => (
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
  const res = await fetch(`https://example.com/api/menu?price=${price}`);
  const menu = await res.json();

  return {
    props: {
      menu,
    },
  };
}

export default MenuApp;
