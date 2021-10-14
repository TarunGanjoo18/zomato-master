import React, { useState, useEffect } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

// redux action
import { getCart } from ".././../Redux/Reducer/Cart/Cart.action";

// Components
import FoodItem from "./FoodItem";

const CardSM = ({ toggle }) => {
  const reduxState = useSelector((global) => global.cart.cart);
  const history = useHistory();

  const continueToCheckout = () => history.push("/checkout/orders");

  return (
    <>
      <div className="md:hidden flex gap-5 items-center justify-start">
        <div className="flex flex-col  items-start">
          <small className="flex items-center gap-1" onClick={toggle}>
            {" "}
            {reduxState.length} Item <IoMdArrowDropup />
          </small>
          <h4>
            ₹{reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
            <sub>(plus tax)</sub>
          </h4>
        </div>
        <button
          onClick={continueToCheckout}
          className="flex items-center gap-1 bg-red-400 px-2 py-1 text-white rounded-lg"
        >
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};

const CardLg = ({ toggle }) => {
  const reduxState = useSelector((global) => global.cart.cart);
  const history = useHistory();

  const continueToCheckout = () => history.push("/checkout/orders");

  return (
    <>
      <div className=" hidden md:flex  items-center justify-between container px-20 mx-auto">
        <div className="flex gap-2 text-xl items-start">
          <span
            className="border bg-white border-gray-500 p-1 rounded"
            onClick={toggle}
          >
            <IoMdArrowDropup />
          </span>
          <h4>Your Orders ({reduxState.length})</h4>
        </div>
        <div className="flex  items-center gap-2">
          <h4 className="text-xl">
            Subtotal : ₹{" "}
            {reduxState.reduce((acc, curVal) => acc + curVal.totalPrice, 0)}
          </h4>
          <button
            onClick={continueToCheckout}
            className="flex text-lg font-light h-10 items-center gap-1 bg-red-400 px-3 py-1 text-white rounded-lg"
          >
            Continue <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </>
  );
};

const CartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();
  const reduxState = useSelector((global) => global.cart.cart);

  const closeCart = () => setIsOpen(false);

  const toggleCart = () => setIsOpen((prev) => !prev);
  return (
    <>
      {reduxState.length && (
        <>
          {isOpen && (
            <div className="fixed w-full  bg-white z-10  p-2 px-3 bottom-14 lg:bottom-14 h-48 overflow-y-scroll lg:px-5">
              <div className="flex items-center justify-between text-xl font-semibold">
                <h3>Your Orders</h3>
                <IoClose onClick={closeCart} />
              </div>
              <hr className="my-2" />
              <div className="flex flex-col gap-1">
                {reduxState.map((food) => (
                  <FoodItem key={food._id} {...food} />
                ))}
              </div>
            </div>
          )}
          <div className="fixed w-full  bg-white z-10  p-2 px-3 bottom-0">
            <CardSM toggle={toggleCart} />
            <CardLg toggle={toggleCart} />
          </div>
        </>
      )}
    </>
  );
};

export default CartContainer;
