import { Routes, Route } from "react-router-dom";
import Calculator from "./Calculator";
import TodoList from "./TodoList";
import ColorSelector from "./ColorSelector";
import Main from "./Main";
import Test from "./Test";

export default function ToolSet({ latitude, longitude, accuracy }) {
  return (
    <div className="flex justify-center mt-20">
      <Routes>
        <Route path='/' element={<Main latitude={latitude} longitude={longitude} accuracy={accuracy} />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/color' element={<ColorSelector />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/test' element={<Test />} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  )
}