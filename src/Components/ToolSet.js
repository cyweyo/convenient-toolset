import { Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Memo from "./Memo";
import ColorSelector from "./ColorSelector";

export default function ToolSet() {
  return (
    <div className="flex justify-center mt-20">
      <Routes>
        <Route path="*" element={<div>없는페이지임</div>} />
        <Route path='/' element={<Calculator />} />
        <Route path='/color' element={<ColorSelector />} />
        <Route path='/memo' element={<Memo />} />
      </Routes>
    </div>
  )
}