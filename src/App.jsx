import React, { useRef, useState } from 'react'

function App() {

  // useRef
  const todo = useRef()
  // state
  const [data, setData] = useState([])

  function addTodo(e) {
    e.preventDefault()
    console.log(todo.current.value);
    data.push(todo.current.value)
    setData([...data])
    console.log(setData);


  }

  return (
    <form onSubmit={addTodo} >
      <input type="text" placeholder='Enter todo' ref={todo} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default App