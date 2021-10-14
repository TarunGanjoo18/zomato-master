import {Route , Redirect } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from './HOC/Restaurant.HOC';
import CheckoutHOC from "./HOC/CheckoutHOC"

// Component
import Temp from "./Components/temp";
// Pages
import Home from './/Components/Page/Home'
import Overview from './Components/Page/Restaurant/Overview';
import OrderOnline from "./Components/Page/Restaurant/OrderOnline";
import Reviews from './Components/Page/Restaurant/Reviews';
import Menu from './Components/Page/Restaurant/Menu';
import Photos from './Components/Page/Restaurant/Photos';
import Checkout from './Components/Page/Checkout';
import GoogleAuth from './Components/Page/GoogleAuth';
import RedirectRestaurant from './Components/Page/Restaurant/Redirect';

// redux action
import { getMyself } from './Redux/Reducer/User/user.action';

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.zomatoUser) dispatch(getMyself());
  }, []);
 
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery"/>
    </Route>
    <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
    <HomeLayoutHOC  path = "/" exact component={Temp}/>
    <HomeLayoutHOC  path = "/:type" exact component={Home}/>
    <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
 
    <RestaurantLayoutHOC path = "/restaurant/:id/overview" exact component={Overview}/>
    <RestaurantLayoutHOC path = "/restaurant/:id/menu" exact component={Menu}/>
    <RestaurantLayoutHOC path = "/restaurant/:id/reviews" exact component={Reviews}/>
    <RestaurantLayoutHOC path = "/restaurant/:id/photos" exact component={Photos}/>
    <RestaurantLayoutHOC path = "/restaurant/:id/order-online" exact component={OrderOnline}/>
    <CheckoutHOC path = "/checkout/orders" exact component={Checkout}/>
    </>
  );
}

export default App;
