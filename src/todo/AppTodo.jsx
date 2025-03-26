import React, { useState } from 'react'

function AppTodo() {

const [tambah, setTambah] = useState(0)

  return (
    <>
        <button onClick={() => setTambah(tambah + 1)}>{tambah}</button>
    </>
  )
}

export default AppTodo
