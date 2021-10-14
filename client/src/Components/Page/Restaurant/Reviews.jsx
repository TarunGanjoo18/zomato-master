import React,{useState , useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import Rating from "react-rating-stars-component"
// Components
import ReviewCard from '../../restaurant/Reviews/reviewCard'
import AddReviewCard from '../../restaurant/Reviews/AddReviewCard'


// Redux Action
import { getReviews } from "../../../Redux/Reducer/Reviews/review.action";


function Reviews() {

    const [reviews , setReviews] =useState([])
    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();
    useEffect(() => {
      if (reduxState) {
        dispatch(getReviews(reduxState?._id)).then((data) =>
          setReviews(data.payload.reviews)
        );
      }
    }, []);
  
    
    return (
        <>
        <div className="w-full flex flex-col md:flex-row relative">

        <div className="w-full md:w-=8/12 flex flex-col gap-3">
            <div className="w-full md:hidden">
            <AddReviewCard/>
            </div>
        {
            reviews.map((review)=>(
                <ReviewCard {...review}/>
                ))
            }
            </div>
            <aside
            className="hidden items-start md:flex md:w-4/12 sticky top-2 bg-white lg:ml-4 p-5  rounded-xl shadow-md flex flex-col gap-2 "
          style={{ height: "fit-content" }}>


    <AddReviewCard/>
            </aside>
            </div>
        </>
    )
}

export default Reviews
