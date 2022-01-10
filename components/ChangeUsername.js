import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.get("username")})`
    );

    if (!username) {
      return;
    }

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="text-white hover:text-pink-700"
      >
        Change Username
      </button>
    </div>
  );
};

export default ChangeUsername;
