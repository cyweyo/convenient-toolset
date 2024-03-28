import { FaDivide } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { TbPlusMinus } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaEquals } from "react-icons/fa6";


export default function Calculator() {
  return (
    <div className="flex flex-col w-96 border-2 border-rose-500 p-4 rounded-lg">
      <div className="">
        <div className="mb-4">결과 값: {"10억"}</div>
        <div className="flex justify-center space-x-5">
          <button className="border"><MdOutlineClear /></button>
          <button className="border"><TbPlusMinus /></button>
          <button className="border"><FaPercentage /></button>
          <button className="border"><FaDivide /></button>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="border">7</button>
          <button className="border">8</button>
          <button className="border">9</button>
          <button className="border"><IoCloseSharp /></button>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="border">4</button>
          <button className="border">5</button>
          <button className="border">6</button>
          <button className="border"><FiMinus /></button>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="border">1</button>
          <button className="border">2</button>
          <button className="border">3</button>
          <button className="border"><FiPlus /></button>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="border">0</button>
          <button className="border">.</button>
          <button className="border"><FaEquals /></button>
        </div>
      </div>
    </div>
  )
}

