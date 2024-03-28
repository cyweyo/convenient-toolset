import React from 'react';
import NavMenu from './Components/NavMenu'
import ToolSet from './Components/ToolSet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const [activeKey, setActiveKey] = useState(1);
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-3xl font-bold underline flex justify-center my-8">
        Convenient Tool Set
      </h1>
      <NavMenu activeKey={activeKey} setActiveKey={setActiveKey} navigate={navigate} />
      <ToolSet />
    </>
  );
}

export default App;
