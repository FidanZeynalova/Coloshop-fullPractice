import React from 'react'

function Add() {
  return (
    <div className='Add'>
     <div className="container">
      <h1>  Add Form</h1>
      <form>
      <div className="input">
          <input type="text" placeholder='Add New Product Image'/>
        </div>
        <div className="input">
          <input type="text" placeholder='Add New Product Name'/>
        </div>
        <div className="input">
          <input type="number" placeholder='Add New Product Price'/>
        </div>
        <button type="submit">Add</button>
      </form>
     </div>
    </div>
  )
}

export default Add
