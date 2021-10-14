import React,{useState , useEffect} from 'react'
import {BsStarFill} from "react-icons/bs"
import {useDispatch , useSelector} from "react-redux"
import dayjs from "dayjs";
import { getUser } from "../../../Redux/Reducer/User/user.action";

function ReviewCard(props) {
    const [user, setUser] = useState("");
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(getUser(props.user)).then((data) =>
        setUser(data.payload.user.fullname)
        // console.log({data})
   
      );
    }, []);
  
  
    return (
        <>
            <div  className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"
                         alt="avatar" 
                        className="w-full h-full rounded-full object-cover"/>
                    </div>

                    <div className="flex flex-col ">
                        <h3 className="text-lg font-semibold">
                            {user}
                        </h3>
                        <small className="text-gray-500">5 Reviews &bull; 5 Followers</small>
                    </div>
           </div>
                    <button className="text-red-400 border border-red-400 p-2 rounded-lg">Follow</button>
                </div>
        
<div  className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
             3 <BsStarFill/>
        </span>
        <h5 className="font-regular uppercase">  {props.isRestaurantReview ? "Dining" : "Delivery"}</h5>
        <small className="text-gray-500 ">  {dayjs(props.createdAt).format("DD MMM YYYY")}</small>
    </div>

    <div className="w-full">
        <p className="w-full text-gray-600 font-light text-base">
        {props.reviewText}
            </p>
    </div>
</div>

            </div>
        </>
    )
}

export default ReviewCard
