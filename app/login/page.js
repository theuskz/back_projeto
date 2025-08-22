import Input from "./components/input";
import Foto from "./components/image";
export default function Home() {
  return (
    <div className="flex overflow-hidden">
      <div className="w-1/2 h-screen flex justify-center items-center bg-blue-800 ">
        <Input />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center">
        <Foto />
      </div>
    </div>
  );
}
