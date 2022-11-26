import React from 'react';
import classes from '../css/MenW.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { StoreAction } from '../Redux/Item';
const ProductDisplay = (props) => {
  var str = props.item;
  const type= props.type;
  const dispatch =useDispatch();
  const replaced = str.split(' ').join('+').split('/').join('^');
  console.log(replaced);
  const Setup = (e)=>
  {
   e.preventDefault();
  dispatch(StoreAction.setProductCategory({type}));
  localStorage.setItem("type",type);
  }
  return (
    <>

  <div className={classes.column} onClick={Setup}>
  <Link to={`/detail/${type}/${replaced}`} style={{textDecoration:'none'}}>
   <img src={props.image} alt="Snow" style={{width:'77%',height:'80%'}} className={classes.swap}/>
   <div >
   <p className={classes.change}>{props.item}</p>
   <p className={classes.change1}>${props.price}</p>
   </div>
   </Link>
  </div>

    </>
  )
}

export default ProductDisplay