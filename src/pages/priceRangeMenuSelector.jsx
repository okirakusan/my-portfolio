import { useState, useEffect } from "react";
import menuData from "pages/api/menu.json";
import Image from "next/image";

const MenuApp = () => {
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(1000); // デフォルトは1000円
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);

  const clearMenu = () => {
    const filteredMenu = menuData.filter((item) => item.price <= price);
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
  };

  const handleOrder = (item) => {
    item.ordered = true;
    setTotal(total + item.price);
    setOrderedItems([...orderedItems, item]);
  };

  const clearOrder = () => {
    setTotal(0);
    setOrderedItems([]);
  };

  const handlePriceChange = (e) => {
    setPrice(parseInt(e.target.value));
  };

  useEffect(() => {
    const filteredMenu = menuData.filter((item) => item.price <= price);
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
  }, [price]);

  return (
    <>
      <section className=" pb-40 dark:text-white h-auto">
        <h1 className="text-3xl font-bold mb-8">
          Menuをランダムに選んでくれるアプリ
        </h1>
        <button
          onClick={clearMenu}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 mb-4"
        >
          メニュー再取得
        </button>
        <form className="mb-8">
          <label htmlFor="price" className="mr-4">
            設定金額:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={handlePriceChange}
            className="border border-gray-400 rounded p-2 w-32 dark:text-black"
          />
          <p>※1500円で全メニューからランダムに取得できます</p>
        </form>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {selectedMenu.map((item) => (
            <li key={item.id} className="border border-gray-400 p-4">
              <div className="font-bold mb-2">{item.name}</div>
              <Image
                src={`${item.image}`}
                alt={`${item.name}`}
                width={200}
                height={100}
                layout="responsive"
                className="mb-2"
              />
              <div className="text-lg mb-2">{item.price}円</div>
              <button
                onClick={() => handleOrder(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                注文
              </button>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold my-8">注文済み</h2>
        <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 ">
          {orderedItems.map((item, index) => {
            const count = orderedItems.filter((i) => i.id === item.id).length;
            if (index === orderedItems.findIndex((i) => i.id === item.id)) {
              return (
                <li key={item.id} className="border border-gray-400 p-4">
                  <div className="font-bold mb-2">{item.name}</div>
                  <Image
                    src={`${item.image}`}
                    alt={`${item.name}`}
                    width={200}
                    height={100}
                    layout="responsive"
                    className="mb-2"
                  />
                  <div className="text-lg mb-2">
                    {item.price}円 × {count}点
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <h2 className="text-2xl font-bold my-8">合計: {total}円</h2>
        <button
          onClick={clearOrder}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          注文クリア
        </button>
      </section>
    </>
  );
};

export default MenuApp;
