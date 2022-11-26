import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { StoreAction } from '../Redux/Item';
import CartDetail from './CartDetail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from  '../css/cartpage/cartpage.module.css';
import {Link,NavLink ,BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
const CartPage = () => {
    const param = useParams();
    const Cart = useSelector((state)=>state.store.Cart);
    const type= param.type;
    console.log(type);
    let Amount=0;
    const dispatch = useDispatch();

    const items  = Cart.length;
    console.log("Cart data",Cart);
    for(let i=0;i<Cart.length;i++)
    {
        Amount = Amount + Cart[i].Total;
    }
    console.log(Amount);
    


  return (
    <>
    { items > 0 && 
    <div>
    <h1 className={classes.statusp} style={{color:'black',fontSize:'16px',marginTop:'40px'}}>
        Your Cart
    </h1>
    <p className={classes.statusk}>({Cart.length} items)</p>
    </div>
    }
    {Cart.map((Carts)=> <CartDetail id={Carts.id} type={Carts.type} image={Carts.image} quantity={Carts.quantity} size={Carts.size} price={Carts.price} Total={Carts.Total} item={Carts.item} ></CartDetail>)} 
  {items > 0 &&   <div class="container">
    <div class="row offset-md-7">
       <p className={classes.Amount}>Total : $ {Amount.toFixed(2)}</p>
       <div style={{textDecoration:'none'}}>
        <Link to="/checkout" style={{color:'#FFFFFF',border:'none',outline:'none',textDecoration:'none',outline:'none',fontSize:'14px',fontFamily:'Noto ,sans-serif',marginLeft:'30px',marginTop:'-7px',padding:'8px 43px',color:'#202020',border:'2px solid black',}}>CHECKOUT</Link>
    </div>
    </div>
    </div>
}
{items == 0 && <p style={{color:'#757575',fontSize:'14x',textAlign:'center',marginTop:'57px'}}>Your <ShoppingCartIcon style={{color:'#757575',fontSize:'19px',marginTop:'4px'}}></ShoppingCartIcon>is empty</p>}
{items == 0 && <p style={{color:'#757575',fontSize:'14x',textAlign:'center',marginTop:'5px',marginBottom:'500px'}}> Click on SHOP at the top for main menu</p>}
{ items > 0 &&    <div style={{marginTop:'320px'}}>
    <p class="statusp">Made by Stone Store</p> 
                       <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'9px 18px',backgroundColor:'#202020',border:'2px solid black'}}>DEMO ONLY</a>
                     </div>
    </div>
    
}
</>
  )
}

export default CartPage