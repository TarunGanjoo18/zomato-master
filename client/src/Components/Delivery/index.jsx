import React , {useState , useEffect} from 'react'
import {useSelector} from "react-redux"


import DeliveryCarousel from './DeliveryCarousel'
import Brand from './Brand'
import RestaurantCard from '../RestaurantCard'

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.restaurants
    );
   
  
    useEffect(() => {
      reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);



    // const [restaurantList , setRestaurantList] = useState([
    //     {
    //         _id : "1",
    //         photos : [
    //             "https://b.zmtcdn.com/data/pictures/2/19482092/ba88ebfc25cbd1e284bd5ec918570964.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    //         ],
    //         name : "Samosa Party",
    //         cuisine : ["Street Food", "Beverages", "Tea"],
    //         averageCost : 100,
    //         isPro : true,
    //         isOff : 80,
    //         durationOfDelivery : 47,
    //         restaurantReviewValue: 4.1
    //     },
    //     {
    //         _id : "2",
    //         photos : [
    //             "https://b.zmtcdn.com/data/pictures/2/19482092/ba88ebfc25cbd1e284bd5ec918570964.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    //         ],
    //         name : "Samosa Party",
    //         cuisine : ["Street Food", "Beverages", "Tea"],
    //         averageCost : 100,
    //         isPro : true,
    //         isOff : 80,
    //         durationOfDelivery : 47,
    //         restaurantReviewValue: 4.1
    //     },
    //     {
    //         _id : "3",
    //         photos : [
    //             "https://b.zmtcdn.com/data/pictures/2/19482092/ba88ebfc25cbd1e284bd5ec918570964.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    //         ],
    //         name : "Samosa Party",
    //         cuisine : ["Street Food", "Beverages", "Tea"],
    //         averageCost : 100,
    //         isPro : true,
    //         isOff : 80,
    //         durationOfDelivery : 47,
    //         restaurantReviewValue: 4.1
    //     }
    // ])


    return (
        <>
            <DeliveryCarousel/>
            {/* <Brand/> */}
           <div className="flex justify-between flex-wrap"> 
         
           {
                restaurantList.map((restaurant, index)=>
                <RestaurantCard {...restaurant} key={index}/>
                )
           }
           </div>
        </>
    )
}

export default Delivery
