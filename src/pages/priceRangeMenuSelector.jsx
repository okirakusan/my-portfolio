import Image from "next/image";

const MenuApp = (props) => {
  const {
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
  } = props;

  return (
    <>
      <section className=" dark:text-white h-2/4">
        <h1 className="text-3xl font-bold mb-8 text-center">
          メニューをランダムに選ぶアプリ <br />
          （「こっそりお勘定」）
        </h1>
        <button
          onClick={clearMenu}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 mb-4"
        >
          メニュー再取得
        </button>
        <form className="mb-2">
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
          <span>円</span>
          <p>※設定金額の範囲内でメニューをランダムに組み合わせ表示します。</p>
          <p>※メニューの品数は10品です。</p>
          <p>※メニュー単一での最低価格は800円、最高価格は1400円です。</p>
        </form>
        <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {selectedMenu.map((item) => (
            <li key={item.id} className="border border-gray-400 p-4">
              <div className="font-bold mb-2">{item.name}</div>
              <Image
                src={`${item.image}`}
                alt={`${item.name}`}
                width={200}
                height={100}
                layout="responsive"
                objectFit="contain"
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
        <h2 className="text-2xl font-bold mt-6 mb-2">注文済み</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {orderedItems.map((item, index) => {
            const count = orderedItems.filter((i) => i.id === item.id).length;
            if (index === orderedItems.findIndex((i) => i.id === item.id)) {
              return (
                <li
                  key={item.id}
                  className="border border-gray-400 p-4 bg-yellow-300 text-black font-bold"
                >
                  <div className="flex justify-between items-center">
                    <div className="font-bold mb-2">{item.name}</div>
                    <div className="text-lg mb-2">
                      {item.price}円 × {count}点
                    </div>
                  </div>
                  <Image
                    src={`${item.image}`}
                    alt={`${item.name}`}
                    width={200}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                    className="mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => addOneMore(item)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                    >
                      +1
                    </button>
                    <button
                      onClick={() => clearOne(item)}
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                    >
                      -1
                    </button>
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>{" "}
        <h2 className="text-2xl font-bold my-8">合計: {total}円</h2>
        <button
          onClick={clearOrder}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          全注文クリア
        </button>
      </section>
    </>
  );
};

export default MenuApp;
