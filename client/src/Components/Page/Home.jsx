import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux';
// component
import Delivery from '../Delivery';
import Dining from '../Dining';
import NightLife from '../Night Life/index'
import Nutrition from '../Nutrition';

// redux actions
import { getRestaurant } from '../../Redux/Reducer/restaurant/restaurant.action';


const Home = () => {
  
    const {type} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRestaurant())
    },[])

    return (
        <div className="my-5">
           {type === "delivery" && <Delivery/>}
           {type === "dining" && <Dining/>}
           {type === "night" && <NightLife/>}
           {type === "nutrition" && <Nutrition/>}
        </div>
    )
}

export default Home
