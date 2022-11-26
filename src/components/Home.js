import React ,{useEffect}from 'react'
import classes from '../css/Home.module.css';
import { useDispatch ,useSelector} from 'react-redux';
import {Link,NavLink ,BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { StoreAction } from '../Redux/Item';
const Home = () => {

  return (
      <>
      <div style={{marginTop:'10px'}}>
      <Link to="/list/MenWear" style={{border:'none',outline:'none',textDecoration:'none'}}>
    <div style={{width:'auto',height:'600px fixed',marginTop:'65px'}}>
    <img src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg" class="img-fluid" style={{width:'102%',height:'170%'}}/>
    </div>
    <p className={classes.statusp}>Men Outerwear</p>
    <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'10px 43px',color:'#202020',border:'2px solid black',}}>SHOP NOW</a>
    </div>
    </Link>
    </div>
    <div>
    <Link to="/list/LadyWear" style={{border:'none',outline:'none',textDecoration:'none'}}>  
    <div style={{width:'auto',height:'400px fixed',marginTop:'40px',}}>
    
      <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg" class="img-fluid" style={{width:'102%',height:'140%'}}/>
    </div>
    <p className={classes.statusp} title='Ladies Outwear'>Ladies Outerwear</p>
    <div class="container1" style={{textDecoration:'none'}}>
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'10px 43px',color:'#202020',border:'2px solid black',}}>SHOP NOW</a>
    </div>
   </Link>
    </div>
    <div className={classes.row1}>
  <div className={classes.column}>
  <Link to="/list/MenShirt"  style={{border:'none',outline:'none',textDecoration:'none'}}>
    <img src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg" alt="Snow" class={classes.section} style={{width:'101%',height:'642%'}}/>
    <p className={classes.statusp}>Men T-Shirts</p>
    
    <div class="container1" style={{textDecoration:'none'}}>
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'10px 43px',color:'#202020',border:'2px solid black',} } class={classes.section}>SHOP NOW</a>
    </div>
    </Link>
  </div>
  <div className={classes.column}>
  <Link to="/list/LadyShirt"  style={{border:'none',outline:'none',textDecoration:'none'}}>
    <img src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg" alt="Forest" style={{width:'102%',height:'642%'}}/>
    <p className={classes.statusp}>Ladies T-Shirts</p>
    <div class="container1">
            <a style={{backgroundColor:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'10px 43px',color:'#202020',border:'2px solid black',marginTop:'10px'}}>SHOP NOW</a>
    </div>
    </Link>
  </div>
</div>
<div className={classes.scale} >
<p class="statusp">Made by Stone Store</p>
                       <div class="container1">
                         <a style={{color:'#FFFFFF',fontSize:'14px',fontFamily:'Noto ,sans-serif',padding:'9px 18px',backgroundColor:'#202020',border:'2px solid black'}} className={classes.links}>DEMO ONLY</a>
                       </div>
</div>
{/* </div> */}
    </>
  )
}

export default Home