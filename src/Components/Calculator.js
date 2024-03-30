import { FaDivide } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { TbPlusMinus } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FaEquals } from "react-icons/fa6";
import { useState } from "react";


export default function Calculator() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [operator, setOperator] = useState("")

  const handleNumberClick = (e) => {
    // 숫자 입력
    // 숫자 연달아 입력하면 한 숫자로
    // 연산 기호 들어오면 기억
    // 다음 숫자 입력
    // 숫자 연달아 입력하면 한 숫자로
    // 연산 기호 들어오면 연산하고 second를 first로 교체
    // equals 누르면 first와 second 연산
    let checkNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
    let checkOperator = ["plus", "minus", "multiply", "divide", "percentage"];
    if (e === "AC") {
      setFirstInput("")
      setSecondInput("")
      setOperator("")
    }
    if (e === "tab") {
      if (firstInput !== "" && operator === "") {
        setFirstInput(-firstInput)
        console.log("firstInput", -firstInput)
      }
      if (secondInput !== "") {
        setSecondInput(-secondInput)
      }
    }
    if (checkNumber.includes(e) && operator === "") {
      if (firstInput.includes(".") || secondInput.includes(".")) {

      }
      setFirstInput(firstInput + e)
      console.log("firstInput", firstInput + e)
    }
    if (checkOperator.includes(e)) {
      setOperator(e)
      console.log("operator", e)
    }
    if (checkNumber.includes(e) && operator !== "") {
      setSecondInput(secondInput + e)
      console.log("secondInputType", typeof secondInput + e)
    }
    if (e === "percentage") {
      setFirstInput(firstInput / 100)
    }
    if (e === "equals") {
      if (operator === "divide") {
        setFirstInput(firstInput / secondInput)
      } else if (operator === "plus") {
        setFirstInput(Number(firstInput) + Number(secondInput))
      } else if (operator === "minus") {
        setFirstInput(firstInput - secondInput)
      } else {
        setFirstInput(firstInput * secondInput)
      }
      setSecondInput("")
    }
  }

  return (
    <div className="flex flex-col w-96 border-2 border-slate-500 p-4 rounded-lg">
      <div className="flex flex-col text-center">
        <input className="text-right placeholder:text-black border-2 h-6 border-slate-500 mb-4 pr-1"
          type="text"
          value={
            secondInput
              ? secondInput
              : firstInput
          } placeholder="0" readOnly />
        <div className="flex h-6 border-t-2 border-x-2 border-slate-500">
          <button className="flex items-center justify-center w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick("AC")}>AC</button>
          <button className="flex items-center justify-center w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick("tab")}><TbPlusMinus /></button>
          <button className="flex items-center justify-center w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick("percentage")}><FaPercentage /></button>
          <button className="flex items-center justify-center w-1/4"
            onClick={() => handleNumberClick("divide")}><FaDivide /></button>
        </div>
        <div className="flex border-t-2 border-x-2 border-slate-500">
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(7)}>7</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(8)}>8</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(9)}>9</button>
          <button className="flex items-center justify-center w-1/4"
            onClick={() => handleNumberClick("multiply")}><IoCloseSharp /></button>
        </div>
        <div className="flex border-t-2 border-x-2 border-slate-500">
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(4)}>4</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(5)}>5</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(6)}>6</button>
          <button className="flex items-center justify-center w-1/4"
            onClick={() => handleNumberClick("minus")}><FiMinus /></button>
        </div>
        <div className="flex border-t-2 border-x-2 border-slate-500">
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(1)}>1</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(2)}>2</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(3)}>3</button>
          <button className="flex items-center justify-center w-1/4"
            onClick={() => handleNumberClick("plus")}><FiPlus /></button>
        </div>
        <div className="flex border-t-2 border-x-2 border-b-2 border-slate-500">
          <button className="w-1/2 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(0)}>0</button>
          <button className="w-1/4 border-r-2 border-slate-500"
            onClick={() => handleNumberClick(".")}>.</button>
          <button className="flex items-center justify-center w-1/4" onClick={() => handleNumberClick("equals")}><FaEquals /></button>
        </div>
      </div>
    </div >
  )
}

