import { useEffect, useState } from "react";
import{useParams} from "react-router-dom";
function Productdatails(){
    let {productID}=useParams();
    const [product,setproduct]=useState();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((response)=>{response.json()})
            .then((product)=>{setproduct(product); })
    },[productID])
   return (
    <>
    {product && <h1> {product.titel },{product.image},{ product.description}</h1>}
    
    </>
   )
}
export default Productdatails;