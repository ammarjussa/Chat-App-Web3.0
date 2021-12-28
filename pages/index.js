import Image from "next/image";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="relative">
      <Login />
      <div className="w-full h-screen relative overflow-hidden">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
