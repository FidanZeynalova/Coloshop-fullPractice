import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { RiArrowGoBackFill } from "react-icons/ri";
import { NavLink, useNavigate, useParams } from 'react-router'
import { useGetAllProductsQuery, useGetProductByIdQuery } from '../App/Slices/ColoshopSlices';

function Detail() {
  const { id } = useParams()
  const { data, isLoading } = useGetProductByIdQuery(id)

  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className='Detail'>
      <h1>Product Detail</h1>
      {
        isLoading ? (
          <h1>...isLoading</h1>
        ) : (
          <div className="card" >
            <div className="image">
              <img src={data.image} alt="" />
            </div>
            <p>{data.name} </p>
            <p style={{ color: "#ff4853" }}>${data.price} </p>
            <div className="icons">
              <div className="icon">
                <span><NavLink to={"/"} style={{ color: "black" }}><RiArrowGoBackFill /></NavLink> </span>
              </div>
              <div className="icon">
                <FaShoppingCart />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Detail

