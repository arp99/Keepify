import './App.css';
import {Display , TodoInput , TodoItem} from './components'
import { useState } from 'react'

function App() {
  const [todoItems , setTodoItems] = useState([])
  return (
    <div className="App">
      {/* <Display />
      <TodoInput /> */}
      <TodoItem  items ={todoItems} setItems={setTodoItems}/>
    </div>
  );
}

export default App;
