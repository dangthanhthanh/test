import './product.css'
import { product } from "../interface";
import { useEffect, useState } from 'react';
import appaxios from '../../axios/appaxios';
import Edit from '../edit/edit';

export const Product=({name,image,price,phone,id}:product)=>{
    interface styleProduct{
        display:string,
        id:number
    }
    interface styleEdit{
        display:string,
        id:number
    }
    const [styleProduct,setstyleProduct]=useState<styleProduct>({
        display:'flex',
        id:id,
    })
    const [styleEdit,setstyleEdit]=useState<styleEdit>({
        display:'none',
        id:id,
    })

        const onclickEdit=()=>{
            return(setstyleProduct({
                display:'none',
                id:id,
            }),
            setstyleEdit({
                display:'flex',
                id:id,
            }))
        }
        function onclickRemove(){
            async function deleteProduct(id:number) {
                await appaxios.delete(`${id}`)
                return window.location.reload()
            }
            deleteProduct(id)
        }
    return(
        <div>
            <div style={styleProduct}
            className="product">
                <img src={image} alt="img" />
                <ul className=''>
                    <li>{name}</li>
                    <li>{price} $</li>
                    <li>phone: {phone}</li>
                    <li className='btn-product'><button onClick={onclickEdit}>edit</button><button onClick={onclickRemove}>remove</button></li>
                </ul>
            </div>
            <div style={styleEdit}>
               <Edit name={name} image={image} price={price} phone={phone} id={id}/>
            </div>
        </div>
    )
}