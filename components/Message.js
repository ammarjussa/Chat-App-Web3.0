import { useMoralis } from "react-moralis";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-br-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
};

export default Message;
