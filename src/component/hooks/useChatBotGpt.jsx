import { useState, useCallback, useMemo } from "react";

export const useChatBotGpt = () => {
  const initialState = { message: "", messages: [], isLoading: false };
  const [{ message, messages, isLoading }, setState] = useState(initialState);
  const setMessage = (value) =>
    setState((state) => ({ ...state, message: value }));
  const setMessages = (value) =>
    setState((state) => ({ ...state, messages: value }));
  const setIsLoading = (value) =>
    setState((state) => ({ ...state, isLoading: value }));

  const HandleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (!message) return;

      setIsLoading(true);
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });
      setIsLoading(false);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: message },
        { sender: "bot", text: response.data.choices[0].message?.content },
      ]);

      setMessage("");
    },
    [message]
  );

  const Messages = useMemo(
    () =>
      messages.map((message, index) => (
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
      )),
    [messages]
  );

  return { message, setMessage, isLoading, HandleSubmit, Messages };
};
