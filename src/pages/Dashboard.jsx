import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const Dashboard = () => {
    //state
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setAllProducts(res.data))
        .catch(errors => console.log(errors))
    }, [])

    //handler
    return (
    <fieldset>
        <legend>Dashboard.jsx</legend>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Desciption</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allProducts.map((product) => {
                        return(
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.createdAt}</td>
                                <td>
                                    <Link to={`/products/${product._id}`}>View</Link>
                                    <Link to={`/products/edit/${product._id}`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </fieldset>
    )
}

export default Dashboard