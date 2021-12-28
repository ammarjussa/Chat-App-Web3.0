import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate, isAuthenticating, isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    router.push("/home");
  }

  return (
    <div className="flex flex-col mt-10 mb-10 absolute z-50 h-2/3 w-full items-center justify-center">
      <p className="text-white text-4xl font-bold">WELCOME TO</p>
      <p className="text-white text-7xl font-bold hover:text-orange-300">
        CHAT APP 3.0
      </p>
      <div className="mt-10">
        <Image
          className="object-cover rounded-full"
          src="https://i.imgur.com/mEWrdvi.png"
          height={160}
          width={160}
        />
      </div>
      <button
        onClick={() => authenticate()}
        className="mt-10 h-16 w-auto px-10 bg-yellow-500 font-bold rounded-lg hover:bg-yellow-400"
      >
        {isAuthenticating
          ? "Authenticate with your wallet"
          : "Connect With A Wallet"}
      </button>
      <div className="mt-5">
        <p className="text-right text-white text-xs">Don't have a wallet?</p>
        <p className="text-right text-white text-xs underline cursor-pointer hover:text-orange-300">
          Sign in with Email and Password
        </p>
      </div>
    </div>
  );
};

export default Login;
