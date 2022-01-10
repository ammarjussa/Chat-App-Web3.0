import { useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MESSAGES = "Messages";
const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();

  const { data, loading, error } = useMoralisQuery(
    MESSAGES,
    (query) => query.ascending("createdAt"),
    // .greaterThan(
    //   "CreatedAt",
    //   new Date(Date.now() - 1000 * 60 + MINS_DURATION)
    // ),
    [],
    {
      live: true,
    }
  );

  console.log(data);

  const endOfMsgRef = useRef(null);

  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage msgRef={endOfMsgRef} />
      </div>
      <div ref={endOfMsgRef} className="text-center text-gray-300 mt-5">
        <p>You are up to date {user?.getUsername()}! </p>
      </div>
    </div>
  );
};

export default Messages;
