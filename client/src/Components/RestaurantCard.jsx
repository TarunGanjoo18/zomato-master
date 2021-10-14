import React,{useEffect , useState} from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { AiTwotoneStar } from "react-icons/ai";
import {getImage} from "../Redux/Reducer/Image/Image.action"
const RestaurantCard = (props) => {
  const [image, setImage] = useState({
    images: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) =>
        setImage(data.payload.image)
      );
  }, [props.photos]);

  return (
    <>
    <Link to={`/restaurant/${props._id}`} className="w-full">
      <div className="bg-white p-4 rounded-2xl mb-4 w-full md:w-1/2 lg:w-1/3 transition duration-700 ease-in-out hover:shadow-lg ">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute flex items-end justify-between w-full bottom-4">
            <div className="flex flex-col gap-2 items-start">
              {
                props.isPro && (
                  <span  className="bg-blue-600 text-white  p-1 rounded text-sm">Pro extra 10% Off</span>
                )
              }
              {
                props.isOff && (
                  <span className="bg-red-400 text-white p-1   rounded text-sm">{`$(props.isOff)`}</span>
                )
              }
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded  ">{props.durationOfDelivery} min</span>
          </div>
          <img
            src={image.images.length && image.images[0].location}
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between my-2">
          <h4 className="text-xl font-medium">{props.name}</h4>
          <span className="bg-green-800 text-white text-sm flex items-center  p-1 rounded  ">
            {props.restaurantReviewValue} <AiTwotoneStar />
          </span>
        </div>
        <div className="flex items-center justify-between text-gray-600">
          <p>{props.cuisine.join(", ")}</p>
          <p>₹ {props.averageCost} for one</p>
        </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default RestaurantCard;
