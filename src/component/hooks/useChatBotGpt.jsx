import { useState } from "react";
import openai from "openai";
import { Configuration, OpenAIApi } from "openai";

export const useChatBotGpt = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const configuration = new Configuration({
    organization: process.env.NEXT_PUBLIC_OPENAI_ORG,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  async function HandleSubmit(event) {
    event.preventDefault();
    if (!message) return;

    setIsLoading(true);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // prompt: message,
      messages: [{ role: "user", content: message }],
      max_tokens: 256,
    });
    setIsLoading(false);

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: message },
      { sender: "bot", text: response.data.choices[0].message?.content },
    ]);

    setMessage("");
  }

  const Messages = messages.map((message, index) => (
    <div
      key={index}
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`p-2 rounded-lg ${
          message.sender === "user" ? "bg-indigo-400 text-white" : "bg-gray-200"
        }`}
      >
        {message.text}
      </div>
    </div>
  ));

  return { message, setMessage, isLoading, HandleSubmit, Messages };
};
