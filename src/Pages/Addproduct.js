import { useState,useNavigate } from "react";
import axios from "axios";
function Addproduct(){
    const [titel,settitel]=useState("");
    const [price,setprice]=useState(0);
    let navigate=useNavigate();
    const formSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://fakestoreapi.com/products",{
            titel,
            price
        }).then((data)=>{console.log(data);
         navigate("/products")
        }) 


       {/*fetch("https://fakestoreapi.com/products",
       {
        method:"POST",
        headers:{
            "Content-Type":"Application/json",
        }
        body:JSON.stringify(
            titel,
            price
        )
       }).then((response)=>{response.json()})
    .then((data)=>{})} */}
    return(
        <>
        <h1>Add product</h1>
        
        <form onSubmit={formSubmit()}>
          <div className="mb-3">
            <label htmlFor="productTitel" className="form-label">Titel</label>
            <input type="text" className="form-control" id="productTitel" aria-describedby="product titel" placeholder="product titel" onChange={(e)=>{settitel(e.target.value)}}/>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Price</label>
            <input type="number" className="form-control" id="productPrice" aria-describedby="product price" placeholder="product price" onChange={(e)=>{setprice(e.target.value)}}/>
          </div>
         
         
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
        
        </>
    )
}}
export default Addproduct;