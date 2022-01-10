import { useState } from "react";
import { useMoralis } from "react-moralis";



const SendMessage = ({ msgRef }) => {
  const { user, Moralis } = useMoralis();
  const [text, setText] = useState("");

  

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    try {
      const message = await messages.save({
        message: text,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      });

      console.log(message);
    } catch (err) {
      console.log(err);
    }

    msgRef.current.scrollIntoView({ behavior: "smooth" });
    setText("");
  };

  return (
    <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 rounded-full max-w-2xl w-11/12 shadow-sm border-2 border-blue-400">
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="flex-grow outline-none bg-transparent text-white placeholder:gray-500"
        type="text"
        placeholder={`Enter a message ${user?.getUsername()}`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
