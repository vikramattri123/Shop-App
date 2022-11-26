import React, { useEffect } from 'react';
import classes from '../css/Summary.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreAction } from '../Redux/Item';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Summary = (props) => {
  const dispatch = useDispatch();
  const Cart = useSelector((state)=>state.store.Cart);
  const Status  = useSelector((state)=>state.store.OrderStatus);
  useEffect(()=>
  {

    const status =false;
    const arrow = false;
    dispatch(StoreAction.changestatus({status,arrow}))
  },[])

  const GoBack=()=>
  {
    const status = true;
    const arrow = false;
    dispatch(StoreAction.changestatus({status,arrow}));
  }
  return (
      <>
            {!Status && <p style={{color:'#202020',textAlign:'center',marginTop:'34px',fontSize:'13px',marginTop:'100px',fontFamily:'sans-serif',fontWeight:'bold'}}>No item in <ShoppingCartIcon style={{color:'#202020' ,fontSize:'15px'}}></ShoppingCartIcon> the Cart </p> }
      {Status  && <div>
        <h1 style={{fontSize:'16px',font:'16px Arial',color:'#202020',textAlign:'center',marginTop:'90px',fontFamily:'sans-serif'}}>Thank you</h1>
    <p style={{fontSize:'13px',font:'12px Arial',fontFamily:'sans-serif',color:'#202020',textAlign:'center',marginTop:'20px'}}>checkout process complete.</p>
    <p style={{fontSize:'13px',font:'12px Arial',fontFamily:'sans-serif',color:'#202020',textAlign:'center',marginTop:'20px'}}>Click on Shop or FINISH to go to Main Menu.</p>
    <div class="container">
    <div class="row offset-md-7">
       <div style={{textDecoration:'none',marginLeft:'-190px',marginTop:'30px'}}>
        <Link to="/" style={{color:'#FFFFFF',border:'none',fontFamily:'sans-serif',textDecoration:'none',outline:'none',fontSize:'14px',fontFamily:'Noto ,sans-serif',marginLeft:'30px',marginTop:'-7px',padding:'8px 43px',color:'#202020',border:'2px solid black',}} onClick={GoBack}>FINISH</Link>
    </div>
    </div>
    </div>
    </div>}
        </>
  )
}

export default Summary