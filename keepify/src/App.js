import './App.css';
import {Display , TodoInput } from './components'
import { useState } from 'react'

function App() {
  const [todoItems , setTodoItems] = useState([])
  const [pinnedTodos , setPinnedTodos] = useState([])

  console.log("Pineed-todos inside app: " , pinnedTodos)
  return (
    <div className="App">
      <TodoInput items ={todoItems} setItems={setTodoItems}/>
      <Display 
          items={todoItems} 
          setItems={setTodoItems} 
          pinnedTodos={pinnedTodos} 
          setPinned={setPinnedTodos}
      />
      {/* <TodoItem  items ={todoItems} setItems={setTodoItems}/> */}
    </div>
  );
}

export default App;
