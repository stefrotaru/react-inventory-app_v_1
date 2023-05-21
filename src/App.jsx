// import { useState } from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Inventory from './components/Inventory'
import Items from './components/Items'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>APP</div>
        <Inventory />
        <Items />
      </DndProvider>
    </>
  )
}

export default App
