import React ,{useEffect,Fragment} from 'react'
import image from './css/No.png';
import classes from './css/Home.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link,NavLink ,BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";
import Home from  './components//Home';
import MensWear from './components//MensWear';
import LadiesWear from './components//LadiesWear';
import Ladyshirt from './components//Ladyshirt';
import ProductDetail from './components//ProductDetail';
import CartPage from './components/CartPage';
import Menshirt from './components/Menshirt';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StoreAction } from './Redux/Item';
import Summary from './components/Summary';
import Checkout from './components/Checkout';
import { Store } from '@mui/icons-material';

let initialvalue = true;
function App() {
 const status  = useSelector(state=>state.store.status);
 const arrow  = useSelector(state=>state.store.arrowstat);
 const dispatch = useDispatch();

const show  = useSelector(state=>state.store.showcart);
let  cartvalue = useSelector(state=>state.store.TotalCart);

const Cart = useSelector(state=>state.store.Cart);
const type = useSelector(state=>state.store.ProductCategory);
const OrderStatus = useSelector(state=>state.store.OrderStatus);
console.log("order status",OrderStatus);

useEffect(()=>
{
  const type =  localStorage.getItem('type');
   dispatch(StoreAction.setProductCategory({type}))
},[])

if(Cart.length === 0)
{
   cartvalue = 0;
}
 const ChangeState =()=>
 {
   const status = true;
   const arrow = false;
   dispatch(StoreAction.changestatus({status,arrow}))
 }


const OpentheCart = (e)=>
{
  e.preventDefault();
  const status = true;
  const arrow = false;
  dispatch(StoreAction.changestatus({status,arrow}))
}

  return (
    <Fragment>
      <Online>
    <Router>
    <nav class="navbar navbar-expand-lg navbar-light" style={{height:'88px'}}>
  <Link class="navbar-brand" to="/" style={{position:'absolute',left:'47%',top:'15px'}} >
    <div>
    <span style={{textAlign:'center',fontWeight:'600',fontsize:'16px',letterSpacing:'0.3em'}} className={classes.scrap} onClick={ChangeState}>SHOP</span>
    </div>
  </Link>

  <Link  to="/cart" style={{color:'black'}}>
  <ShoppingCartIcon style={{position:'absolute',top:'20px',right:'24px'}} onClick={OpentheCart}>
  </ShoppingCartIcon>
  {cartvalue > 0 && <span className={classes.badge} style={{position:'absolute',top:'10px',right:'18px'}}> {cartvalue} </span>}
  </Link>



{arrow
  && 
  <Link to={`/list/${type}`} style={{color:'black',position:'absolute',top:'2px'}}>
  <ArrowBackIcon style={{color:'black',position:'absolute',top:'20px'}}></ArrowBackIcon>
  </Link>
  }
     
     {status  
     && 
     <>
     <button className={classes.menu} style={{position:'absolute',left:'-2px',display:'none'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

    </button>
 
     <div class="collapse navbar-collapse" id="navbarNavAltMarkup" className={classes.header} style={{marginTop:'110px'}} >
     <ul>
      <li>
      <NavLink activeClassName={classes.active}  to="/list/MenWear" style={{color:'black',fontsize:'10px'}}>Men's Outerwear</NavLink>
      </li>
      <li>
      <NavLink activeClassName={classes.active} to="/list/LadyWear" style={{color:'black'}}>Ladies Outerwear</NavLink>
      </li>
      <li>
      <NavLink  activeClassName={classes.active} to="/list/MenShirt"  style={{color:'black'}}>Men's T-Shirts</NavLink>
      </li>
      <li>
      <NavLink activeClassName={classes.active} to="/list/LadyShirt" style={{color:'black'}}>Ladies T-Shirts</NavLink>
      </li>
     </ul>
    </div>
    </>
}
</nav>
<Routes>
     <Route exact path="/" element={<Home/>}></Route> 
      <Route exact path="/list/MenWear" element={<MensWear/>}></Route> 
      <Route exact path="/list/LadyWear"  element={<LadiesWear/>}></Route> 
      <Route exact path="/list/MenShirt"  element={<Menshirt/>}></Route> 
      <Route exact path="/list/LadyShirt"  element={<Ladyshirt/>}></Route> 
      <Route exact path="/cart" element={<CartPage/>}></Route> 
      <Route exact path="/checkout"  element={<Checkout/>}></Route> 
    {OrderStatus  ? <Route exact path="/checkout/success"  element={<Summary/>}></Route> : <Route path="/checkout/success" element={<Navigate replace to="/checkout" />}/>  }
      <Route exact path="/detail/:type/:productname"  element={<ProductDetail/>}></Route> 
    </Routes>
</Router>
{show && <CartPage></CartPage>}
</Online>
<Offline >
      <div style={{marginLeft:'130px',marginTop:'130px'}} className={classes.offline}>
    <h1 className={classes.tag1}>You're offline right now. Check your Internet Connection Speed.</h1>
    <img src={image} style={{marginLeft:'430px'}} className={classes.tag2}></img>
    </div>
    </Offline>
    </Fragment>
  );
}

export default App;
