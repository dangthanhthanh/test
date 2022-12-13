import './product.css'
import { product } from "../interface";

export const Product=({name,image,price,phone}:product)=>{
    return(
        <div className="product">
            <img src={image} alt="img" />
            <ul className=''>
                <li>{name}</li>
                <li>{price} $</li>
                <li>phone: {phone}</li>
            </ul>
        </div>
    )
}