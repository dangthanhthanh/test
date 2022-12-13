import { Product } from "./product/product"
import './body.css'
import { useEffect, useState } from "react"
import appaxios from "../axios/appaxios";
import { product } from "./interface";

const Body=()=>{
    
    
    const [data,setData]=useState<product[]>([])
    useEffect(()=>{
        async function getproduct(){
            try{
                await appaxios.get('').then((res)=>{
                    return setData(res.data);
                }); 
            }
            catch(e){
                console.log(e);
            }
        }
        getproduct();
                console.log(data);
        
    },[])
    return(
        <div className="body">
            <div className="product-wrapper">
                {data.map((product)=>{
                    return(
                        <Product key={product.id} name={product.name} image={product.image} price={product.price} phone={product.phone}  ></Product>
                    )
                })}
            </div>
        </div>
    )
}
export default Body;