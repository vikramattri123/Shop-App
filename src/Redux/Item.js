import { Add } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
const data =  localStorage.getItem("cartvalue");
let Cartvalue;
let Amount=0;
if(data)
{
const Carts = JSON.parse(data);
Cartvalue  = Carts.length > 0 ? Carts : [];
for(let i=0;i<Carts.length;i++)
{
    Amount = Amount + Carts[i].quantity;
}
}
else
{
    Cartvalue = [] ;
    Amount = 0
}
const instate = { items:[],Total:0,status :true, arrowstat:null,Cart:Cartvalue,showcart:false ,TotalCart :Amount,Addcart:false,billingform:false,ProductCategory:'',OrderStatus:false};

export const Storage =  createSlice(
    {
        name:'store',
        initialState:instate,
        reducers:
        {
            AddItem(state,action)
            {
                const  array =  action.payload;
                const existarr = state.items.find((state)=>state.key == array.key)
                if(!existarr)
                {
               state.items.push(
                   {
                       key:array.key,
                       item:array.item_name,
                       price:array.price,
                       description:array.description,
                       image:array.image,
                       type:array.type
                   },
                   
               )
                }
            },
            setProductCategory(state,action)
            {
                 state.ProductCategory = action.payload.type;
            },
            changestatus(state,action)
            {
             state.status = action.payload.status;
             state.arrowstat = action.payload.arrow;
            },
            OpenBill(state)
            {
              state.billingform = !state.billingform;
            },
            CartAdd(state,action)
            {
                const newitem = action.payload;
                console.log("key coming",newitem.key);
                const existitem =  state.Cart.find((val)=> val.id == newitem.id && val.size == newitem.size);
                const qty = parseInt(newitem.quantity);
                state.TotalCart=state.TotalCart + qty;
                const Newprice = newitem.price * qty;
                if(!existitem)
                { 
                    state.Cart.push(
                        {
                            id:newitem.id,
                            item:newitem.item,
                            image:newitem.image,
                            price:newitem.price,
                            quantity:qty,
                            size:newitem.size,
                            Total:Newprice,
                            type:newitem.type,
                        }
                    );
                }
                else
                {
                    existitem.quantity =existitem.quantity+qty;
                    const calculate = newitem.price * newitem.quantity;
                    existitem.Total = existitem.Total + calculate;
                }
            },
            UpdateData(state,action)
            {
            const newitem = action.payload;
            const existitem =  state.Cart.find((val)=> val.id == newitem.id && val.size == newitem.size);
            const qty = parseInt(newitem.data);
            const existqty = parseInt(existitem.quantity);
            state.TotalCart = (state.TotalCart - existqty) + qty;
            const calculate = existitem.price * qty;
            existitem.Total = calculate;
            existitem.quantity = qty;
            const cartvalue  =  JSON.stringify(state.Cart);
            localStorage.setItem('cartvalue',cartvalue);
            },
            ShowData(state)
            {
              state.Addcart = !state.Addcart;
              
            },
            showcart(state)
            {
                  state.showcart = !state.showcart;
            },
            Booked(state)
            {
              state.OrderStatus = true;
              state.Cart = [];
              state.TotalCart = 0;
              const value=[];
              localStorage.removeItem("cartvalue");
              localStorage.removeItem("type");
              
            },
            removeItem(state,action)
            {
               const newitem = action.payload;
               console.log("data fetched",newitem);
               const qty = parseInt(newitem.data);
               state.TotalCart = state.TotalCart - qty;
               if(state.Cart.length > 1)
               {
               state.Cart=state.Cart.filter((val)=> {
                    if (val.id === newitem.id)
                    {
                        if(val.size === newitem.size)
                        {
                            return false;
                        }
                        else
                        {
                           return true;
                        }
                    }
                    else
                    {
                        return true;
                    }
               });
               
            }
            else if(state.Cart.length === 1)
            {
                 state.Cart = [];
                 const value=0;
                 localStorage.setItem("cartvalue",value);
            }
            const cartvalue  =  JSON.stringify(state.Cart);
            localStorage.setItem('cartvalue',cartvalue); 
            }
        }
    }
)

export const StoreAction  =  Storage.actions;
