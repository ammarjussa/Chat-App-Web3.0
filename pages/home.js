import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Home = () => {
  const { isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-800 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
