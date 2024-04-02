import { Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import Memo from "./Memo";
import ColorSelector from "./ColorSelector";
import Welcome from "./Welcome";

export default function ToolSet({ latitude, longitude, accuracy }) {
  return (
    <div className="flex justify-center mt-20">
      <Routes>
        <Route path="*" element={<div>없는페이지임</div>} />
        <Route path='/' element={<Welcome latitude={latitude} longitude={longitude} accuracy={accuracy} />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/color' element={<ColorSelector />} />
        <Route path='/memo' element={<Memo />} />
      </Routes>
    </div>
  )
}