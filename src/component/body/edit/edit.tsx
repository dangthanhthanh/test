import './edit.css'
import { edit } from "../interface";
import appaxios from '../../axios/appaxios';
import { useState } from 'react';
const Edit=({name,image,price,phone,id}:edit)=>{
    const [dataPutName, setdataPutname] = useState<string>(name);
    const [dataPutPrice, setdataPutPrice] = useState<number>(price);
    const [dataPutPhone, setdataPutPhone] = useState<string>(phone);

    const subfrom=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(dataPutName,dataPutPhone,dataPutPrice)
    }
    const onclickbtnedit=()=>{
        const putSub : HTMLElement=document.getElementsByClassName('putsubmit')[0] as HTMLElement;
        putSub.click();
        let data:any={
            "name":`${dataPutName}`,
            "price":`${dataPutPrice}`,
            "phone":`${dataPutPhone}`
        }
        console.log(id);
        async function res(ids:number,datas:any){await appaxios.put(`${ids}`,datas);
        return window.location.reload();}
        res(id ,data)
    }
    return(<div className='edit'>
                <img src={image} alt="img" />
        <form onSubmit={subfrom}>
            <label>name:
                <input 
                    type="text" 
                    name="name"
                    value={dataPutName} 
                    onChange={(e)=>setdataPutname(e.target.value)}
                />
            </label>
            <label>price:
                <input 
                    type="number" 
                    name='price'    
                    value={dataPutPrice} //number
                    onChange={(e)=>setdataPutPrice(e.target.value)}//may tra ve string
                    //thay giup e cai nay voi ak 
                />
            </label>
            <label>phone:
                <input 
                    type="text" 
                    name='phone'
                    value={dataPutPhone} 
                    onChange={(e)=>setdataPutPhone(e.target.value)}
                />
            </label>
            <input type="submit" className='putsubmit' hidden/>
        </form>
            <div>
                <button onClick={onclickbtnedit}>done</button>
                <button onClick={()=>{window.location.reload()}}>return</button>
            </div>
        </div>
    )
}
export default Edit;