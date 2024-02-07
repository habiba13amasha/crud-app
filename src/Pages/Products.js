import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Products.css";
import swal from "sweetalert2";
function Products(){
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        getAllProducts();
    },[]);
    const getAllProducts=()=>{
        fetch('https://fakestoreapi.com/products')
            .then((response)=>{response.json()})
            .then((data)=>{setproducts(data)})
    }
    const deleteProduct=(product)=>{
        swal.fire({
            title:`Are you sure you want to delete ${product.titel} ?`,
            showCancelButton:true
        }).then((data)=>{
            if(data.isConfirmed){
                fetch(`https://fakestoreapi.com/products/${product.id}`,{
                    method:"DELETE"
                  })
                    .then((response)=>(response.json()))
                    .then((data)=>{getAllProducts()})
                   
        }})
    }
        
        
    return (
        <>
        <h1>Products Page</h1>
        <Link to="/products/add" className="btn btn-success mt-3"  >Add new product</Link>
        <table className="table table-striped mt-5 products-table">
          <thead>
           <tr>
            <th>ID</th>
            <th>titel</th>
            <th>price</th>
            <th>categories</th>
            <th>description</th>
            <th>operation</th>
           </tr>
          </thead>
          <tbody>
            {products.map((product)=>{
                return(
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.titel}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description.slice(0,30)}...</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={()=>deleteProduct(product)}>Delete</button>
                        <Link to={`/products/${product.description}`} className="btn btn-info btn-sm">View details</Link>
                        <button className="btn btn-primary btn-sm">Edit</button>
                    </td>
                   </tr>
                )

            })}
           
          </tbody>
        </table>
        </>
    )
}
export default Products;