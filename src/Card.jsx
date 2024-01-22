import React, { useRef, useState } from 'react'

const Card = ({ title, deleteTodo, editTodo, index }) => {

    // useState
    const [showData, setShowData] = useState(true)

    const editedVal = useRef()

    const saveEditTodo = (e ,index) => {
        e.preventDefault()
        // console.log(editedVal.current.value);
        editTodo(index ,editedVal.current.value)
        setShowData(true)
    }

    return (
        <div>
            {showData ? <div>
                <h4>{title}</h4>
                <button onClick={() => { setShowData(false) }}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div> : <div>
                <form onSubmit={saveEditTodo}>
                    <input type="text" placeholder='edited value' ref={editedVal} />
                    <button type='submit'>save</button>
                </form>
            </div>}
        </div>
    )
}

export default Card