import { useState, useRef } from "react";

export const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("送信に成功しました");
        setShowPopup(true);
        nameRef.current!.value = ""; // フォームの入力内容をクリアする
        emailRef.current!.value = "";
        messageRef.current!.value = "";
      }
    });
  };

  return (
    <>
      <footer className="container mt-5 dark:text-white">
        <h2 className="mb-3 text-3xl">お問い合わせ</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              お名前
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              required
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              メールアドレス
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              required
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 dark:text-white text-sm font-bold mb-2"
              htmlFor="message"
            >
              メッセージ
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              required
              ref={messageRef}
            />
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            メール送信
          </button>
        </form>
        {showPopup && (
          <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <p className="text-xl font-bold mb-2 text-black">送信完了！</p>
              <p className="text-black">
                お問い合わせいただきありがとうございます。
              </p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => setShowPopup(false)}
              >
                閉じる
              </button>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};
