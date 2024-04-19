import { useEffect, useRef, useState } from "react"

export default function TodoList() {
  const todoList = ["오늘 할 일 이거임"]
  const [submit, setSubmit] = useState(todoList);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const submitHandler = () => {
    if (input === "") {
      alert("뭐 할 건지 입력해라")
      return
    }
    let copy = [...submit];
    if (copy.includes(input)) {
      alert("이미 있단다 이놈아")
      return
    }
    copy.push(input)
    setSubmit(copy)
  }

  const doneHandler = (i) => {
    let copy = [...submit];
    copy.splice(i, 1)
    setSubmit(copy)
  }

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex flex-col items-center rounded-lg bg-teal-400 pb-6">
        <div className="mt-4 mb-4 text-2xl text-amber-200 p-1 rounded-lg underline underline-offset-4">To do list</div>
        <div className="flex flex-col rounded-lg w-full px-20">
          {
            submit.length !== 0 ?
              submit.map((list, i) => {
                return (
                  <div key={i} className="flex items-center justify-between border rounded-md p-1 bg-teal-600 text-zinc-50 mb-1">
                    <p className="ml-2" >{list}</p>
                    <button onClick={() => {
                      doneHandler(i)
                    }} className="flex items-center justify-center ml-2 text-teal-300 border rounded-md px-1 hover:bg-amber-300">
                      Done
                    </button>
                  </div>
                )
              })
              :
              <div className="flex items-center justify-between border rounded-md p-1 bg-teal-600 text-zinc-50 mb-1">
                <p className="ml-2" >할 일 없단다 이놈아</p>
              </div>
          }
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex justify-between border rounded-md p-1 bg-teal-600">
            <input ref={inputRef} onChange={(e) => {
              setInput(e.target.value)
            }} placeholder="오늘 뭐 할 기누?" className="px-2 rounded-sm bg-teal-200 " />
            <button onClick={submitHandler} className="border rounded-md px-2 ml-2 text-amber-200 hover:bg-orange-300">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}