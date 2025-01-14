import React, { useContext } from 'react'
import { FaCircleInfo, FaMinus, FaPlus } from 'react-icons/fa6'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router';
import { BasketProducts } from '../context/BasketContext';

function Basket() {
  let {basket,setBasket} = useContext(BasketProducts)

  function handleIncrement(item) {
    item.count ++
    setBasket([...basket])
  }
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
          {
            basket.map((item)=>{
              return <tr key={item._id}>
            <td><img src={item.image} alt="" /></td>
            <td>{item.name}</td>
            <td onClick={()=>handleIncrement(item)}><FaPlus /></td>
            <td>{item.count}</td>
            <td><FaMinus /></td>
            <td>{item.count * item.price}</td>
            <td><button> <NavLink to={"/:id"} style={{color:"black"}}> <FaCircleInfo /></NavLink></button></td>
            <td><button><MdDelete /></button></td>
          </tr>
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Basket
