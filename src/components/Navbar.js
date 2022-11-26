// import React ,{useEffect} from 'react'
// import classes from '../css/Home.module.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {Link,NavLink ,BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
// import Home from  './Home';
// import MensWear from './MensWear';
// import LadiesWear from './LadiesWear';
// import Ladyshirt from './Ladyshirt';
// import ProductDetail from './ProductDetail';
// import Menshirt from './Menshirt';
// const Navbar = () => 
// {
//   return (
//     <>
//     <Router>
//     <nav class="navbar navbar-expand-lg navbar-light ">
//   <Link class="navbar-brand" to="/" style={{position:'absolute',left:'47%',top:'10px'}}>
//     <span style={{textAlign:'center',fontWeight:'600',fontsize:'16px',letterSpacing:'0.3em'}}>SHOP</span>
//   </Link>
//   <ShoppingCartIcon style={{position:'absolute',top:'20px',right:'24px'}}/>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//       {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginTop:'60px'}} >
//       <div class="container-fluid">
//     <div class="row" className={classes.header}>
//     <div class=".col-xs-6 .col-md-4 offset-md-4"><NavLink activeClassName={classes.active}  to="/list/mens_outerwear" style={{color:'black',fontWeight:'420',fontSize:'13px'}} className={classes.Navbar}>Men's Outerwear</NavLink></div>
//   <div class=".col-xs-6 .col-md-4"><NavLink activeClassName={classes.active} to="/list/ladies_outerwear" style={{marginLeft:'30px',color:'black',fontWeight:'420',fontSize:'13px'}} className={classes.Navbar} >Ladies Outerwear</NavLink></div>
//   <div class=".col-xs-6 .col-md-4 "><NavLink  activeClassName={classes.active} to="/list/mens_tshirts" style={{marginLeft:'30px',color:'black',fontWeight:'420',fontSize:'13px'}} className={classes.Navbar} >Men's T-Shirts</NavLink></div>
//   <div class=".col-xs-6 .col-md-4"><NavLink activeClassName={classes.active} to="/list/ladies_tshirts" style={{marginLeft:'30px',color:'black',fontWeight:'420',fontSize:'13px'}} className={classes.Navbar}>Ladies T-Shirts</NavLink></div>
//   </div>
//     </div>
//     </div> */}
//       <div class="collapse navbar-collapse" id="navbarNavAltMarkup" className={classes.header} >
//      <ul>
//       <li>
//       <NavLink activeClassName={classes.active}  to="/list/mens_outerwear" style={{color:'black',fontsize:'10px'}}>Men's Outerwear</NavLink>
//       </li>
//       <li>
//       <NavLink activeClassName={classes.active} to="/list/ladies_outerwear" style={{color:'black'}}>Ladies Outerwear</NavLink>
//       </li>
//       <li>
//       <NavLink  activeClassName={classes.active} to="/list/mens_tshirts"  style={{color:'black'}}>Men's T-Shirts</NavLink>
//       </li>
//       <li>
//       <NavLink activeClassName={classes.active} to="/list/ladies_tshirts" style={{color:'black'}}>Ladies T-Shirts</NavLink>
//       </li>
//      </ul>
//     </div>
// </nav>
// <Routes>
//      <Route exact path="/" element={<Home/>}></Route> 
//       <Route exact path="/list/mens_outerwear" element={<MensWear/>}></Route> 
//       <Route exact path="/list/ladies_outerwear"  element={<LadiesWear/>}></Route> 
//       <Route exact path="/list/mens_tshirts"  element={<Menshirt/>}></Route> 
//       <Route exact path="/list/ladies_tshirts"  element={<Ladyshirt/>}></Route> 
//       <Route exact path="/detail/:type/:productname"  element={<ProductDetail/>}></Route> 
//     </Routes>
// </Router>
//     </>
//   )
// }

// export default Navbar

// // <div class="col-sm-2"><a class="nav-item nav-link " href="#" style={{marginLeft:'2px',wordSpacing:'0.4em',color:'black',fontWeight:'500'}} className={classes.Navbar}>Men's Outerwear</a></div>
// // <div class="col-sm-2"><p><a class="nav-item nav-link" href="#" style={{marginLeft:'2px',color:'black',fontWeight:'500'}}>Ladies Outerwear</a></p></div>
// // <p> <a class="nav-item nav-link" href="#" style={{marginLeft:'2px',color:'black',fontWeight:'500'}}>Men's T-Shirts</a></p>
// // <p><a class="nav-item nav-link " href="#" style={{marginLeft:'2px',color:'black',fontWeight:'500'}}>Ladies T-Shirts</a></p>