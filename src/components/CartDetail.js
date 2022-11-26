import React, { useEffect, useState ,useRef, useCallback} from 'react';
import classes from  '../css/cartpage/cartpage.module.css';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreAction } from '../Redux/Item';
import Message from './Message';
const CartDetail = (props) => {

    const [data,setdata] = useState(props.quantity);
    const Cart = useSelector((state)=>state.store.Cart);
    const str = props.item;
    const type= props.type;
    let Amount= 0;
    const replaced = str.split(' ').join('+').split('/').join('^');
    // console.log("what is ",Cart);
    const dispatch =  useDispatch();

const {id,size,quantity} = props;

useEffect(()=>
{
    setdata(props.quantity);
},[Cart])

useEffect(()=>
{
    console.log("data chnage",data);
    dispatch(StoreAction.UpdateData({id,size,data}))
},[data]);


const removeitem =((e)=>
{
  e.preventDefault();
  dispatch(StoreAction.removeItem({id,size,data}));
})
  return (
    <>
   
    <div class="container">
    <div className={classes.changes} style={{marginTop:'5px',padding:'17px'}}>
      
        <div class="row offset-md-1">
            <div class="col-lg-4 " className={classes.leftside}>
                <div class="row">
                <img src={props.image}/>
                <div className={classes.Name}>
                    <p ><Link to={`/detail/${type}/${replaced}`} style={{color:'#202020',textDecoration:'none',outline:'none'}} className={classes.Name}>{props.item}</Link></p>
                </div>
                </div>
            </div>
            <div class="col-lg-7" className={classes.style}>
                            <div class="row">
                            <div className={classes.name2}> 
                            <label  className={classes.label1}>Qty:</label>
                            <select name="select" className={classes.select} value={data} onChange={(e)=>setdata(e.target.value)}>
                           <option class='short' >1</option>
                            <option class='short'>2</option>
                           <option class='short'>3</option>
                           <option class='short'>4</option>
                           <option class='short' >5</option>
                            <option class='short'>6</option>
                           <option class='short'>7</option>
                           <option class='short'>8</option>
                           <option class='short' >9</option>
                            <option class='short'>10</option>
                           <option class='short'>11</option>
                           <option class='short'>12</option>
                            </select>
                           </div>
                           <div className={classes.wrap}>
                            <label  className={classes.label2}>Size: <p>{props.size}</p></label> 
                            
                            </div>
                            <div className={classes.price}>
                            <p className={classes.label3}>${props.price}</p> 
                            </div>
                            <div className={classes.delete}>
                            <a className={classes.label4} onClick={removeitem}>X</a> 
                            </div>
                            </div>
  
            </div>
        </div>
        </div>
        </div>
        
    </>
  )
}

export default CartDetail