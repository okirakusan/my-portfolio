import { IoSend } from "react-icons/io5";
import BeatLoader from "react-spinners/BeatLoader";
import React from "react";

export default function ChatBotGpt(props) {
  const { message, setMessage, isLoading, HandleSubmit, Messages } = props;

  return (
    <>
      <section className="flex justify-center min-h-screen">
        <div className="flex-col justify-center  items-center w-full ">
          <div className="p-4 h-80 lg:h-2/3 bg-gray-100 rounded-t-lg w-full  overflow-scroll">
            <span className="text-center block font-medium text-2xl border-b-2 border-indigo-400 pb-4 mb-3">
              ChatBot-Gpt
            </span>
            {Messages}
          </div>
          <form onSubmit={HandleSubmit} className="w-full">
            <div className="flex items-center p-2 sm:p-4 bg-gray-100 rounded-b-lg w-full">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="flex-1 mr-1 sm:mr-2  sm:py-2 sm:px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-indigo-400 "
                placeholder="メッセージを入力"
                rows={2}
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
