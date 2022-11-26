import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { StoreAction } from '../Redux/Item';
import {Link} from 'react-router-dom';
import '../css/productdetail.css';
import Message from './Message';
let initialdata = true;

const ProductDetail = () => {
    const [size, setsize] = useState('S');
    const Cart=  useSelector((state)=>state.store.Cart);
    const showcart = useSelector((val)=>val.store.Addcart);
    const [quantity,setqty] = useState('1');
    console.log("working just after",size,quantity);
    const param = useParams();
    const types= param.type;
    console.log(types);
    const dispatch = useDispatch();
    useEffect(()=>
    {
       if(Cart.length !=0)
       {
        const cartvalue  =  JSON.stringify(Cart);
        localStorage.setItem('cartvalue',cartvalue);
       }
    },[Cart])
    useEffect(()=>
    {
        const status = true;
        const arrow  = true
        dispatch(StoreAction.changestatus({status,arrow}));
        const Fetch = async()=> 
        {
           
            const response = await fetch('https://shop-store-94510-default-rtdb.firebaseio.com/Store.json/');
            console.log(response);
            if(!response.ok)
            {

            }
            const collect = await response.json();
            let data= (types === 'MenWear' ? collect.MensWear : types === 'MenShirt' ? collect.MenShirt : types === 'LadyWear' ? collect.LadyWear : collect.LadyShirt);
            console.log("what",data);
            for(const key in data)
            {
            dispatch(StoreAction.AddItem({
                           key:key,
                           item_name : data[key].item_name,
                           description : data[key].description,
                           price:data[key].price,
                           image:data[key].image,
                           type:data[key].type
            }))
            }
                
        }
        Fetch();
       
    },[]) 
    

const items =  useSelector((state)=>state.store.items);
console.log("print",items);
const str = param.productname;
const replaced = str.split('+').join(' ').split('^').join('/');
console.log(replaced);
const Data  =  items.find((val)=> val.item === replaced);

console.log("here",Data);
if(!Data)
{
    return <p style={{textAlign:'center',fontWeight:'bold',fontSize:'24px'}}> Loading...</p>
}
const {key,image,price,item,type} = Data;
const id = Data.key;
console.log("key now",key);

const ADDCart =(e)=>
{
    e.preventDefault();
    dispatch(StoreAction.CartAdd({id,image,price,item,size,quantity,type}));
    dispatch(StoreAction.ShowData());
}


  return (

    <div class="container">
    <div className='changes' style={{marginTop:'80px',padding:'17px'}}>
        <div class="row">
            <div class="col-lg-7 left-side-product-box">
                <img src={Data.image} />
            </div>
            <div class="col-lg-4" >
           {showcart  &&  <Message></Message> }
                <div class="right-side-pro-detail">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="right-side-pro-detailp">{Data.item}</p>
                            <p class="right-side-pro-detailparagarph">${Data.price}</p>
                        </div>
                        <div class="col-lg-12">
                            
                            <hr class="p-0 m-0 check"/>
                            <div> 
                            <label for="" class="label1">Size</label>
                            <select name="select" class="select" onChange={e => setsize(e.target.value)}>
                           <option class='short' >S</option>
                            <option class='short'>M</option>
                           <option class='short'>L</option>
                           <option class='short'>XL</option>
                            </select>
                           </div>
                           <hr class="p-0 m-0 check"/>
                           <div> 
                            <label for="" class="label2">Quantity </label>
                            <select name="select" class="select" onChange={e => setqty(e.target.value)}>
                           <option class='short' >1</option>
                            <option class='short'>2</option>
                           <option class='short'>3</option>
                           <option class='short'>4</option>
                           <option class='short'>5</option>
                            </select>
                           </div>
                           <hr class="p-0 m-0 check"/>
                        </div>
                        <div class="col-lg-12">
                            <p style={{color:'#202020',fontWeight:'bold', fontSize:'13px' , fontFamily:'sans-serif',margin:'16px 0px'}}>Description</p>
                            <span style={{color:'#757575',fontSize:'13px',fontFamily:'sans-serif',margin:'-2px',padding:'0px',lineHeight: 1.5}}>{Data.description}</span>
                          
                        </div>
                        <div class="col-lg-12" style={{marginTop:'10px'}}>
                            <p class="tag-section" style={{color:'#757575',fontSize:'13px',fontFamily:'sans-serif'}}><p style={{color:'#757575',fontSize:'13px',fontFamily:'sans-serif'}}>Features: </p>
                            <ul style={{color:'#757575',fontSize:'13px',fontFamily:'sans-serif'}}>
                            <li>100% polyester.</li>
                             <li>Smooth, technical front with textured mesh back.</li>
                           <li>Drawstring bottom for adjustable fit</li>
                           <li>Available in forest green with the white Google logo embroidered at left chest.</li>
                            </ul>
                            </p>
                        </div>
                        <div >
                        <div class="footer" onClick={ADDCart} >
                            <button  class="mainbutton" >ADD TO CART</button>
                        </div>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
        <p class="statusp">Made by Stone Store</p>
                       
                       <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'9px 18px',backgroundColor:'#202020',border:'2px solid black'}}>DEMO ONLY</a>
                     </div>         
                     
    </div>
</div>
  )
}

export default ProductDetail