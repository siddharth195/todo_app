import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'




function App() {
  const [todos,setTodos] = useState([])

  async function fetchData(){
    const responsee = await fetch('http://localhost:3000/todos');
    const data = await response.json();

    setTodos(data);

  }
  fetchData();

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
