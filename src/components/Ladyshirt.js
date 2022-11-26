import React ,{useEffect,useState} from 'react'
import classes from '../css/MenW.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { StoreAction } from '../Redux/Item';
import ProductDisplay from './ProductDisplay';
const Ladyshirt = () => {
  const [data ,setdata] = useState([]);
  const dispatch =  useDispatch();
  let storagedata = [];
  const item  =  useSelector(state=>state.store.items);
  useEffect(()=>
  {
    const status = true;
  const arrow  = false;
   dispatch(StoreAction.changestatus({status,arrow}));
      const Fetch = async()=> 
      {
         
          const response = await fetch('https://shop-store-94510-default-rtdb.firebaseio.com/Store.json/');
          console.log(response);
          if(!response.ok)
          {

          }
          const collect = await response.json();
          let data= await collect.LadyShirt;
          console.log(data);
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
              setdata(storagedata);  
      }
      Fetch();
      console.log(data);
  },[])

  const result  =  item.filter((val)=> val.type == 'LadyShirt');
  const size  = result.length;
console.log(result);
return (
  <>
  <div style={{width:'auto',height:'400px fixed',marginTop:'36px',marginTop:'65px'}} >
      <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg" class="img-fluid" alt="Responsive image"/>
     </div>
     <p style={{textAlign:'center',fontSize:'17px',fontWeight:'bold',fontFamily:'sans-serif',margin:'22px 27px 8px -20px',padding:'0px 5px'}}>Lady T-Shirt</p>
     <p style={{textAlign:'center',fontSize:'12px',fontFamily:'sans-serif',margin:'9px 10px 8px -25px',padding:'0px 5px',color:'#757575'}}>({size} items)</p>
<div className={classes.row}>
   {
       
       result.map((val)=><ProductDisplay key={val.key} item={val.item} price={val.price} description={val.description} image={val.image} type={val.type}></ProductDisplay>)
   }
   </div>
 
   <p class="statusp">Made by Stone Store</p>
                       
                       <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'9px 18px',backgroundColor:'#202020',border:'2px solid black'}}>DEMO ONLY</a>
                     </div>
  </>
)
}

export default Ladyshirt