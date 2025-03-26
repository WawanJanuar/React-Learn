import React, {useState} from 'react'

function TodoIn() {

    const [input, setInput] = useState("")
    

    const handlesumbit = (e) => {
        e.preventDefault();
        props.todo(input, index)
    }

  return (
    <>
    </>
  )
}

export default TodoIn
