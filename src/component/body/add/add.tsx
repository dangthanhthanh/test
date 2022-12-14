import './add.css'
import appaxios from '../../axios/appaxios';
import { useState } from 'react';
const Add=()=>{
    let [datapostImage, setdatapostImage] = useState<string>();
    const [datapostName, setdatapostname] = useState<string>();
    const [datapostPrice, setdatapostPrice] = useState<number>();
    const [datapostPhone, setdatapostPhone] = useState<string>();

    const subfrom=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(datapostName,datapostPhone,datapostPrice,datapostImage)
    }
    const onclickbtnadd=()=>{
        const postSub : HTMLElement=document.getElementsByClassName('postsubmit')[0] as HTMLElement;
        postSub.click();
        let data:any={
            "image":`${datapostImage}`,
            "name":`${datapostName}`,
            "price":`${datapostPrice}`,
            "phone":`${datapostPhone}`
        }
        async function res(datas:any){await appaxios.post(``,datas);
        return window.location.reload();}
        res(data)
    }
    const onaddimage=(e:any)=>{
        if(datapostImage){
            URL.revokeObjectURL(datapostImage);
        }
        const addimage=(e.target.files[0]);
        setdatapostImage(self.URL.createObjectURL(addimage));
    }
    return(<div className='add'>
        <form onSubmit={subfrom}>
            <label>img:</label>
            <img src={datapostImage} alt="hinh" />
            <input 
                type="file" 
                className='image'
                accept='image/*'
                name="image"
                onChange={onaddimage}
            />
            <label>name:
                <input 
                    type="text" 
                    name="name"
                    value={datapostName} 
                    onChange={(e)=>setdatapostname(e.target.value)}
                />
            </label>
            <label>price:
                <input 
                    type="number" 
                    name='price'    
                    value={datapostPrice} 
                    onChange={(e:any)=>setdatapostPrice(e.target.value)}
                />
            </label>
            <label>phone:
                <input 
                    type="text" 
                    name='phone'
                    value={datapostPhone} 
                    onChange={(e)=>setdatapostPhone(e.target.value)}
                />
            </label>
            <input type="submit" className='postsubmit' hidden/>
        </form>
            <div>
                <button onClick={onclickbtnadd}>add</button>
                <button onClick={()=>{window.location.reload()}}>return</button>
            </div>
        </div>
    )
}
export default Add;