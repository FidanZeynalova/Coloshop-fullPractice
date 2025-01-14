import React, { useContext } from 'react'
import { FaCircleInfo, FaMinus, FaPlus } from 'react-icons/fa6'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router';
import { BasketProducts } from '../context/BasketContext';
import { useGetAllProductsQuery } from '../App/Slices/ColoshopSlices';
import { Helmet } from 'react-helmet';

function Basket() {
  let { basket, setBasket } = useContext(BasketProducts)
  let { isLoading } = useGetAllProductsQuery()

  function handleIncrease(item) {
    item.count++
    setBasket([...basket])
  }
  function handleDecrease(item) {

    if (item.count > 1) {
      item.count--
      setBasket([...basket])
    } else {
      let filter = basket.filter((data) => data._id != item._id)
      setBasket(filter)
    }
  }
  function handleDelete(item) {
    let filter = basket.filter((data) =>data._id != item._id)
    setBasket(filter)
  }
  return (
   <>
    <Helmet>
    <link rel="icon" type="image/svg+xml" href="https://is.gd/Q7ckzI" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Basket Page</title>
    </Helmet>
    <div className='Basket'>
      <div className="container">
        <h1>Basket Products</h1>
        {
          (basket.length == 0) ? (
            <button style={{ padding: "15px", fontSize: "18px", cursor: "pointer" }}> <NavLink to={"/"} style={{ color: "black" }}>Go Shopping</NavLink></button>
          ) : (
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
                basket.map((item) => {
                  return <tr key={item._id}>
                    <td><img src={item.image} alt="" style={{ width: "150px", height: "150px" }} /></td>
                    <td>{item.name}</td>
                    <td onClick={() => handleIncrease(item)}><FaPlus /></td>
                    <td>{item.count}</td>
                    <td onClick={() => handleDecrease(item)}><FaMinus /></td>
                    <td>{item.count * item.price}</td>
                    <td><button> <NavLink to={`/${item._id}`} style={{ color: "black" }}> <FaCircleInfo /></NavLink></button></td>
                    <td onClick={()=>handleDelete(item)}><button><MdDelete /></button></td>
                  </tr>
                })
              }
            </table>
          )
        }
      </div>
    </div>
   </>
  )
}

export default Basket
