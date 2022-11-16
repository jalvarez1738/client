import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    //state
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const createProduct = (e) => {
        e.preventDefault()
        //create body to send to api
        let body = {
            "title" : title,
            "price" : price,
            "description" : description
        }
        //make axios req to api
        axios.post("http://localhost:8000/api/products", body)
            .then(res => {
                
                console.log(res.data)
                setTitle("")
                setPrice("")
                setDescription("")
                navigate("/dashboard")
            })
            .catch(errors => console.log(errors))
    }

    return (
    <fieldset>
        <legend>Create.jsx</legend>
        <form onSubmit={createProduct}>
            <p>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </p>
            <p>
                Price:
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </p>
            <p>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </p>
            <button>Submit</button>
        </form>
    </fieldset>
    )
}

export default Create