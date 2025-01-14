import React, { useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { RiArrowGoBackFill } from "react-icons/ri";
import { NavLink, useNavigate, useParams } from 'react-router'
import { useGetProductByIdQuery } from '../App/Slices/ColoshopSlices';
import { Helmet } from 'react-helmet';

function Detail() {
  const { id } = useParams()
  const { data, isLoading } = useGetProductByIdQuery(id)
  let navigate = useNavigate()

  useEffect(() => {
    if (!data && !isLoading) {
      navigate("/*")
    }
  }, [data])

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/6uVjXj" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Add Page</title>
      </Helmet>
      <div className='Detail'>
        <h1 style={{fontSize:"50px"}}>Detail Page</h1>

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
    </>
  )
}

export default Detail

