import React, { useContext } from 'react'
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';
import { useDeleteProductMutation, useGetAllProductsQuery } from '../App/Slices/ColoshopSlices';
import { MdDelete } from 'react-icons/md';
import { BasketProducts } from '../context/BasketContext';

function Products() {
    let { data, isLoading, refetch } = useGetAllProductsQuery()
    let [deleteProduct] = useDeleteProductMutation()
    let { basket, setBasket } = useContext(BasketProducts)


    function handleDelete(id) {
        deleteProduct(id)
        refetch()
    }
    function handleBasket(item) {
        let basketProduct = basket.find((product) => product._id == item._id)
        if (basketProduct) {
            basketProduct.count++
            setBasket([...basket])
        } else {
            setBasket([...basket, { ...item, count: 1 }])
        }
    }


    return (
        <div className='Products'>
            <div className="container">
                <h1>New Arrivals</h1>
                <div className="span"></div>

                <div className="sort-search">
                    <div className="search">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="sort">
                        <select>
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            <option value="cheap">First Cheap</option>
                            <option value="expesive">First Expensive</option>
                        </select>
                    </div>
                </div>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...Loading</h1>
                        ) : (
                            data.map((item) => (
                                <div className="card" key={item._id}>
                                    <div className="image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <p>{item.name}</p>
                                    <p style={{ color: "#ff4853" }}>${item.price}</p>
                                    <div className="icons">
                                        <div className="icon">
                                            <span><NavLink to={`/${item._id}`} style={{ color: "black" }}><FaInfoCircle /></NavLink> </span>
                                        </div>
                                        <div className="icon" onClick={() => handleBasket(item)}>
                                            <FaShoppingCart />
                                        </div>
                                        <div className="icon" onClick={() => handleDelete(item._id)}>
                                            <MdDelete />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
