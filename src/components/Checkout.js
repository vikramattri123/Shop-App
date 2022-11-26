import React ,{useEffect, useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Summary from './Summary';
import classes from '../css/Summary.module.css';
import {Link ,useNavigate} from 'react-router-dom';
import { StoreAction } from '../Redux/Item';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Formik , Form} from 'formik';
import { Text } from './Text';
import * as Yup from 'yup';
const Checkout = () => {
 
const navigate= useNavigate();
  const validate=Yup.object(
    {
    email:Yup.string().email('Email is Invalid').required(),
    mobile:Yup.string().matches(/\b\d{10}\b/g,'Mobile No is Invalid, Should be of 10 digits').required(),
    address:Yup.string().min(6,'Address is Invalid!,Minmum of 6 Character').required(),
    billaddress:Yup.string().min(6,'Address is Invalid!,Minmum of 6 Character').required(),
    city:Yup.string().min(6,'City is Invalid!,Minmum of 6 Character').required(),
    billcity:Yup.string().min(6,'City is Invalid!,Minmum of 6 Character').required(),
    state:Yup.string().min(6,'State is Invalid!,Minmum of 6 Character').required(),
    billstate:Yup.string().min(6,'State is Invalid!,Minmum of 6 Character').required(),
    zip:Yup.string().matches(/\b\d{6}\b/g,'ZipCode is Invalid!,Should be of 6 digits').required(),
    billzip:Yup.string().matches(/\b\d{6}\b/g,'ZipCode is Invalid!,Should be of 6 digits').required(),
    CardName:Yup.string().min(6,'Card Name is Invalid!,Minmum of 6 Character').required(),
    CardNumber:Yup.string().matches(/\b\d{12}\b/g,'Card Number Invalid!, Should be of 12 digits').required(),
    CVV:Yup.string().matches(/\b\d{3}\b/g,'CVV is Invalid !, Should be of Length 3 digits').required()
    }
  )


  useEffect(()=>
  {

    const status =false;
    const arrow = false;
    dispatch(StoreAction.changestatus({status,arrow}))
  },[])
  
    let Amount=0;
    const Cart = useSelector((state)=>state.store.Cart);
    const billing  =  useSelector((state)=>state.store.billingform);
    const dispatch  = useDispatch();
    console.log("checkout data",Cart);
    const items  = Cart.length;
    for(let i=0;i<Cart.length;i++)
    {
        Amount = Amount + Cart[i].Total;
    }
    console.log(Amount);


  return (
    <>
    <Formik
    initialValues={{
      email:'',
      mobile:'',
      address:'',
      city:'',
      state:'',
      zip:'',
      CardName:'',
      CardNumber:'',
      CVV:'',
      billaddress:'',
      billstate:'',
      billcity:'',
      billzip:''
    }}
    validationSchema={validate}

    onSubmit={
      values=>
      {
        dispatch(StoreAction.Booked());
        // values.billaddress = 1;
        // values.billcity = values.city;
        // values.billstate = values.state;
        // values.billzip = values.zip;
        alert("Data Added Successfully");
        navigate('/checkout/success');
       
      }
    }
    on
    >
      {formik => (
      <div>
        {console.log("Data values",formik.values)}
      <Form>
        {items == 0 && <p style={{color:'#757575',fontSize:'14x',textAlign:'center',marginTop:'100px'}}>Your <ShoppingCartIcon style={{color:'#757575',fontSize:'19px',marginTop:'4px'}}></ShoppingCartIcon>is empty</p>}
        {items == 0 && <p style={{color:'#757575',fontSize:'14x',textAlign:'center',marginTop:'5px',marginBottom:'500px'}}> Click on SHOP at the top for main menu</p>}
     { items > 0 && 
     <div>  
    <h1 style={{fontSize:'16px',font:'16px Arial',color:'#202020',textAlign:'center',marginTop:'50px'}}>Checkout</h1>
    <p style={{fontSize:'11px',font:'12px Arial',color:'#757575',textAlign:'center'}}>Shop is a demo app - form data will not be sent</p>
     <div class="container">
    <div className='changes' style={{marginTop:'80px',padding:'17px'}}>
        <div class="row">
            <div class="col-lg-6 left-side-product-box">
   <h2 style={{color:'black',fontSize:'13px',fontWeight:'bold',fontFamily:'sans-serif'}}>Account information</h2>
  <div class="form-group" style={{marginTop:'7px'}}>
    <Text type="email" name="email" label="Email" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div class="form-group" style={{marginTop:'32px'}}>
    <Text type="text"  name="mobile" label="Mobile" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Phone Number" />
  </div>
  <h2 style={{color:'black',fontSize:'13px',marginTop:'33px',fontWeight:'bold',fontFamily:'sans-serif'}}>Shipping Address</h2>
  <div class="form-group" style={{marginTop:'28px'}}>
    <Text type="text" name="address" label="Address" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Address" />

  </div>
  <div class="form-group" style={{marginTop:'28px'}}>
    <Text type="text" name="city" label="City" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="City"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6" style={{marginTop:'33px'}}>
      <Text type="text" name="state" label="State" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="State/Province"  />
    </div>
    <div class="form-group col-md-6" style={{marginTop:'33px'}}>
      <Text type="text" name="zip" label="Zip" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Zip"  />
    </div>
    <div class="form-group col-md-12" style={{marginTop:'28px'}}>
      <select id="inputState" name="country" class="form-control" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}}>
        <option value="USA" label="Canada" selected>United states</option>
        <option value="Canada" label="Canada">Canada</option>
      </select>
    </div>
  
    
  </div>
  <div class="form-check" style={{marginTop:'28px'}}>
      <input class="form-check-input" type="checkbox" id="gridCheck" onClick={()=>
      {
        dispatch(StoreAction.OpenBill());
        // formik.values.billaddress = formik.values.address;
        // formik.values.billcity = formik.values.city;
        // formik.values.billstate = formik.values.state;
        // formik.values.billzip = formik.values.zip;
      }}/>
      <label class="form-check-label" for="gridCheck" style={{fontSize:'13px',margin:'-8px 0px 0px 6px'}}>
        use my billing address
      </label>
    </div>
  { billing &&
  <>
 

    <h2 style={{color:'black',fontSize:'13px',marginTop:'33px',fontWeight:'bold',fontFamily:'sans-serif'}}>Billing Address</h2>
  <div class="form-group" style={{marginTop:'28px'}}>
    <Text type="text" name="billaddress" label="Address"  style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Address" />

  </div>
  <div class="form-group" style={{marginTop:'28px'}}>
    <Text type="text" name="billcity"  label="City" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="City" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6" style={{marginTop:'33px'}}>
      <Text type="text" name="billstate"  label="State" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="State/Province" />
    </div>
    <div class="form-group col-md-6" style={{marginTop:'33px'}}>
      <Text type="text" name="billzip"  label="Zip" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Zip" />
    </div>
    <div class="form-group col-md-12" style={{marginTop:'28px'}}>
      <select id="inputState" class="form-control" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}}>
      <label for="inputState" style={{fontSize:'13px',fontWeight:'500'}}>Country</label>
        <option selected>Country</option>
        <option>United states</option>
        <option>Canada</option>
      </select>
    </div>
  </div>
  </>
}

 </div>
    <div class="col-lg-6" >
     <h2 style={{color:'black',marginTop:'-3px',marginBottom:'13px',fontSize:'13px',fontWeight:'bold',fontFamily:'sans-serif'}} className={classes.joined}>Payment Method</h2>
  <div class="form-group" style={{marginTop:'9px'}}>
    <Text type="text" name="CardName" label="CardName" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="CardHolder Name"  />
 
  </div>
  <div class="form-group" style={{marginTop:'30px'}}>
    <Text type="text" name="CardNumber" label="CardNumber" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} class="form-control" id="exampleInputPassword1" placeholder="Card Number" />
  </div>
  <div class="form-row" style={{marginTop:'32px'}}>
  <div class="form-group col-md-4" >
  <label for="inputState">Expiry Month</label>
      <select id="inputState" class="form-control " style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}}>
        <option selected>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Aug</option>
        <option>Sept</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </select>
    </div>
    <div class="form-group col-md-4" >
      <label for="inputState">Year</label>
      <select id="inputState" class="form-control" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}}>
        <option selected>2016</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
    <div class="form-group col-md-4" >
      <Text type="text" name="CVV" label="CVV" class="form-control" id="inputZip" style={{outline:'none',border:'none',borderBottom:'1px solid #757575'}} />
    </div>
  </div>
  <h2 style={{color:'black',fontSize:'12px',marginTop:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>Order Summary</h2>
  <div >
    {Cart.map((val)=>
    <>
     <div className={classes.sidebar}>
     <p style={{color:'#202020',fontSize:'13px',fontFamily:'sans-serif'}}>{val.item}</p>
      </div>
      <div className={classes.page}>
     <p style={{color:'#202020',fontSize:'13px',fontFamily:'sans-serif'}}>${val.Total}</p>
      </div>
      </>  
        )}
        {Cart.length == 0 && <p style={{color:'#202020',textAlign:'center',marginTop:'34px',fontSize:'13px',fontFamily:'sans-serif',fontWeight:'bold'}}>No item in <ShoppingCartIcon style={{color:'#202020' ,fontSize:'15px'}}></ShoppingCartIcon> the Cart </p> }
        {Cart.length > 0 && 
        <>
    <div className={classes.sidebar} style={{marginTop:'50px'}}>
     <p style={{color:'#202020',fontSize:'13px',fontFamily:'sans-serif',fontWeight:'bold'}}>Total</p>
      </div>
      <div className={classes.page} style={{marginTop:'50px'}}>
     <p style={{color:'#202020',fontSize:'13px',fontFamily:'sans-serif',fontWeight:'bold'}}>${Amount}</p>
      </div>
     
      <div className={classes.sidebar} style={{textDecoration:'none',marginTop:'28px',marginLeft:'-30px'}}>
       
       <button type="submit" style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',marginLeft:'30px',marginTop:'-7px',padding:'8px 43px',color:'#202020',border:'2px solid black',}} onClick={()=>{formik.values.billaddress = formik.values.address;
        formik.values.billcity = formik.values.city;
        formik.values.billstate = formik.values.state;
        formik.values.billzip = formik.values.zip;}}>PLACE ORDER</button>
       {/* <button  style={{border:'none',outline:'none',textDecoration:'none'}} onClick={Place}>this way</button> */}
      </div>
    </>
     }
    </div>
  </div>
        </div>          
    </div>
</div>
</div>

} 
</Form>
</div>
)}
</Formik>
<p class="statusp">Made by Stone Store</p>     
                       <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'9px 18px',backgroundColor:'#202020',border:'2px solid black'}}>DEMO ONLY</a>
                     </div>               
    </>
  )
}

export default Checkout