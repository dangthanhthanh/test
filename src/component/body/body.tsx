import { Product } from "./product/product"
import './body.css'
import { useEffect, useState } from "react"
import appaxios from "../axios/appaxios";
import { product } from "./interface";
import { Loading } from "../decor/loading";
import Add from "./add/add";



const Body=()=>{
    const limit=10;
    const [add,setAdd]=useState(false);
    const [loading,setloading]=useState(true);
    const [data,setData]=useState<product[]>([])
    const [page,setPage]=useState(1);
    const [dataLength,setDataLength]=useState(limit);
    const [isDatalength,setIsDataLength]=useState(true);

    const onclickBtnPage=(e:any)=>{
        console.log(e.target.value);
        setPage(e.target.value);
    }
    // const Loadingpage=()=>{
    //     if(loading){
    //         return <Loading/>
    //     }
    // }
    function pagination(length:number){
        let pages:number;
        let arr=[];
        if(length%limit>0){
            pages=Math.floor(length/limit)+1
        }
        else{
            pages=Math.floor(length/limit)
        }
        console.log(pages);
       
        for(let i:number=1;i<=pages;i++){
            arr[i-1]=i;
        }
        console.log(arr);
        return(arr.map((button)=>{
            return(<button key={button} value={button} onClick={onclickBtnPage}>{button}</button>)
        }))

    }
    function pagedata(islength:boolean,page:number,limitpage:number){
        if(islength){
            return(``)
        }
        else{
            return(`?l=${limitpage}&&p=${page}`)
        }
    }
    useEffect(()=>{
        async function getproduct(){
            try{
                await appaxios.get(`${pagedata(isDatalength,page,limit)}`).then((res)=>{
                    console.log(data)
                    console.log(dataLength)
                    console.log(isDatalength)
                    console.log(page)
                    if(isDatalength){
                        return ((setData(res.data.slice(0,limit))),
                        setDataLength(res.data.length),
                        setIsDataLength(false)),
                        setloading(false)
                    }
                    else{
                        return (setData(res.data),setloading(false))
                    }
                }); 
            }
            catch(e){
                console.log(e);
            }
        }
        getproduct();
                    console.log(page)
                    console.log(data)
                    console.log(dataLength)
                    console.log(isDatalength)
        
    },[page])
    return(
        <div className="body">
            <div className="add-wrapper">
                <button onClick={()=>{setAdd(true)}}>add new card</button>
                {add? <Add/>:null}
            </div>
            {loading? <Loading/> :null}
            <div className="product-wrapper">
                {data.map((product)=>{
                    return(
                        <Product key={product.id} name={product.name} image={product.image} price={product.price} phone={product.phone} id={product.id} ></Product>
                    )
                })}
            </div>
            <div className="page-wrapper">
                {pagination(dataLength)}
            </div>
        </div>
    )
}
export default Body;