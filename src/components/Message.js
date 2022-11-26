import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { StoreAction } from '../Redux/Item';
import classes from '../css/productdetail.css';
const customStyles = {
  content: {
    top: '30%',
    height:'170px',
    width:'370px',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function Message() {
  let subtitle;
  const status = useSelector(state=>state.store.Addcart);
  const [modalIsOpen, setIsOpen] = React.useState(status);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(StoreAction.ShowData());
  }
  const viewcart =()=>
  {
    dispatch(StoreAction.ShowData()); 
  }
  const checkouts=()=>
  {
    dispatch(StoreAction.ShowData());
  }
  return (
    <div >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
       
      >
        <span style={{fontSize:'13px'}}>Added to the cart</span><button onClick={closeModal} style={{marginLeft:'180px',border:'none',outline:'none',backgroundColor:'white',color:'black',fontWeight:'bold'}}>X</button>
       <div class="row">

       
       <Link to="/cart"  onClick={viewcart} style={{textDecoration:'none',outline:'none'}}>
       <div style={{color:'#FFFFFF',cursor:'pointer',textDecoration:'none',fontSize:'14px',fontFamily:'Noto ,sans-serif',marginTop:'30px',marginLeft:'15px',padding:'8px 35px',color:'#202020',border:'2px solid black'}}>
        VIEW CART
       </div>
       </Link>
       
       <Link to="/checkout"  onClick={viewcart} style={{textDecoration:'none',outline:'none'}}>
       <div style={{color:'#FFFFFF',cursor:'pointer',textDecoration:'none',fontSize:'14px',fontFamily:'Noto ,sans-serif',marginTop:'30px',marginLeft:'17px',padding:'8px 35px',color:'#202020',border:'2px solid black'}}>
       CHECKOUT
       </div>
       </Link>
      
      
       </div>
      </Modal>
    </div>
  );
}

export default Message