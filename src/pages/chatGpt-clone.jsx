import { useState } from "react";
import { IoSend } from "react-icons/io5";
import BeatLoader from "react-spinners/BeatLoader";
// import openai from "openai";
import { Configuration, OpenAIApi } from "openai";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!message) return;

    setIsLoading(true);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // prompt: message,
      messages: [{ role: "user", content: message }],
      // max_tokens: 256,
    });
    setIsLoading(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
      { sender: "bot", text: response.data.choices[0].message?.content },
    ]);

    setMessage("");
  }
  return (
    <>
      <section className="flex justify-center">
        <div className="flex-col justify-center h-200 items-center w-full max-w-lg ">
          <div className="p-4 pt-28 lg:pt-36 bg-gray-100 rounded-t-lg w-full  overflow-scroll">
            <span className="text-center block font-medium text-2xl border-b-2 border-indigo-400 pb-4 mb-3">
              ChatGPT Clone
            </span>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-indigo-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center p-4 bg-gray-100 rounded-b-lg w-full">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="flex-1 mr-2 py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400"
                placeholder="メッセージを入力"
              />
              <button
                type="submit"
                className="flex items-center justify-center p-2 rounded-lg bg-indigo-400 text-white hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
              >
                {isLoading ? (
                  <BeatLoader size={8} color="white" />
                ) : (
                  <IoSend size={20} />
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
