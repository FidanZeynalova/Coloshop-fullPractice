import React from 'react'
import { FaCircleInfo } from 'react-icons/fa6'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router';

function Basket() {
  return (
    <div className='Basket'>
      <div className="container">
        <h1>Basket Products</h1>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Increament</th>
            <th>Count</th>
            <th>Decrement</th>
            <th>Total Price</th>
            <th>Info</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Increament</td>
            <td>Count</td>
            <td>Decrement</td>
            <td>Total Price</td>
            <td><button> <NavLink to={"/:id"} style={{color:"black"}}> <FaCircleInfo /></NavLink></button></td>
            <td><button><MdDelete /></button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Basket
