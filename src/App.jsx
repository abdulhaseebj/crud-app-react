import React, { useRef, useState } from 'react'
import Card from './Card';
import Navbar from './components/Navbar';

function App() {

  //  useRef
  const todoVal = useRef()
  // useState
  const [data, setData] = useState([])

  function addTodo(e) {
    e.preventDefault()
    console.log(todoVal.current.value);
    data.push(todoVal.current.value)
    setData([...data])
    todoVal.current.value = ''

  }

  const deleteTodo = (index) => {
    console.log('delete todo', index);
    data.splice(index, 1)
    setData([...data])
  }

  const editTodo = (index, value) => {
    console.log('edit todo', value);
    data.splice(index, 1 , value)
    setData([...data])

  }
  return (
    <>
    <Navbar/>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='Enter todo' ref={todoVal} />
        <button type='submit'>Add Todo</button>
      </form>
      {data.length > 0 ? data.map((item, index) => {
        return <Card key={index} title={item} deleteTodo={deleteTodo} editTodo={editTodo} index={index} />
      }) : <h1>no data</h1>}
    </>
  )
}

export default App