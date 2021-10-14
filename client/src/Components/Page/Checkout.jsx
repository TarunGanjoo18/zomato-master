import React from 'react'
import {BsShieldLockFill} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux";
import Razorpay from "razorpay";

// Components
import FoodItem from '../Cart/FoodItem'
import AddressList from '../Checkout/AddressList'


// reduxa action
import { createOrder } from "../../Redux/Reducer/Order/order.action";


function Checkout() {
    const reduxStateCart = useSelector((global) => global.cart.cart);
    const reduxStateUser = useSelector((global) => global.user.user.user);
    const dispatch = useDispatch();
  
    const address=[
        {
            name : "Home",
            address : "Pune, Maharashtra, India",
        },
        {
            name : "Gym",
            address : "Pune, Maharashtra, India",
        },
        {
            name : "Office",
            address : "Pune, Maharashtra, India",
        },
    ]

    const payNow = () => {
        let options = {
          key: "rzp_test_WnEkfg4nnhjqO8",
          amount:
            reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) *
            100,
          currency: "INR",
          name: "zomato",
          description: "Payment",
          image:
            "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
    
          handler: () => {
            alert("Payment Successful");
          },
          // prefill: {
          //   name: reduxStateUser.fullname,
          //   email: reduxStateUser.email,
          // },
          theme: { color: "#e23744" },
        };
    
        let razorPay = new window.Razorpay(options);
        razorPay.open();
      };
    

    return (
        <>
            <div className="flex flex-col gap-3 my-3 items-center">
                <h1 className="text-xl md:text-2xl text-center font-bold">Checkout</h1>
                <div className="bg-white w-full md:w-4/5 lg:w-3/5 py-3 rounded-lg shadow-lg flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className=" w-full  flex flex-col  gap-2 items-center">
                        <h5 className="text-lg tracking-wider">ORDER FROM</h5>
                        <div className="flex  w-full  flex-col items-center text-gray-400">
                        <h4>Dominos's Pizza</h4>
                        <small>Domino's India Pvt Lt.</small>
                        </div>
                        <div className="my-4 flex flex-col gap-2 w-full px-4 md:w-3/5 ">
                        {reduxStateCart.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
                        </div>
                        <div className="flex flex-col gap-3 w-full md:w-3/5">
                                 <h4 className="text-xl font-semibold px-3 md:px-1 lg:px-6">Choose Address</h4>
                                <AddressList address={address}/>
                  
                        </div>
                    </div>
                    <button  onClick={payNow} className="flex items-center justify-center gap-2 w-1/2 h-14 my-5 text-white font-medium text-lg bg-red-800 hover:bg-red-900 rounded-lg">Pay Securely <BsShieldLockFill/></button>
                </div>
            </div>
        </>
    )
}

export default Checkout
