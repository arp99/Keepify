import './App.css';
import {Display , TodoInput } from './components'
import { useState } from 'react'

function App() {
  const [todoItems , setTodoItems] = useState([])
  const [pinnedTodos , setPinnedTodos] = useState([])

  return (
    <div className="App">
      <TodoInput items ={todoItems} setItems={setTodoItems}/>
      <Display 
          items={todoItems} 
          setItems={setTodoItems} 
          pinnedTodos={pinnedTodos}
          setPinnedTodos={setPinnedTodos}
      />
    </div>
  );
}

export default App;
