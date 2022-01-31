import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import { useRouter } from "next/router";

const Header = () => {
  const { user, logout } = useMoralis();
  const router = useRouter();

  return (
    <div className="sticky top-0 p-5 z-50 shadow-sm border-b-2 border-pink-700 text-white">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="object-cover rounded-full"
            src="https://i.imgur.com/mEWrdvi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-900 border-8 rounded-full">
            <Avatar />
          </div>
          <h1 className="text-3xl">Welcome to Web3 Chat App</h1>
          <h2 className="text-4xl font-bold">{user?.get("username")}</h2>
          <ChangeUsername />
          <div className="text-sm">
            <button
              className="text-white hover:text-pink-700"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
