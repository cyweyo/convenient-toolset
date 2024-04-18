import React, { useEffect } from 'react';
import NavMenu from './Components/NavMenu'
import ToolSet from './Components/ToolSet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(1);


  useEffect(() => {

  }, [activeKey])

  return (
    <>
      <NavMenu activeKey={activeKey} setActiveKey={setActiveKey} navigate={navigate} />
      <ToolSet />
    </>
  );
}

export default App;
