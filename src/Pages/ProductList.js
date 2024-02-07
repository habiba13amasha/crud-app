import { useRecoilState } from "recoil";
import productState from "./atomes/productsAtoms";
 function ProductList(){
    const[product,setProduct]=useRecoilState(productState);
    return(
        <>
        <div className="product-list"></div>
           {product.map((product)=>{
             return(
                <h1 key={product.id}>{product.titel}</h1>
             )
           })}
        </> 
    )
 }
 export default ProductList;
 