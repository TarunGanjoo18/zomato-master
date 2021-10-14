import React,{useState , useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick"
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {BiCopy} from "react-icons/bi"
import {FaDirections} from "react-icons/fa"
import Mapview from "../../restaurant/Mapview";
import { useSelector, useDispatch } from "react-redux";

// component
import MenuCollection from "../../restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../restaurant/MenuSimilarRestaurantCard";
import { NextArrow , PrevArrow} from "../../Delivery/carousel.arrow";
import ReviewCard from "../../restaurant/Reviews/reviewCard";



import { getImage } from "../../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../../Redux/Reducer/Reviews/review.action";

const Overview = () => {
  const [menuImage, setMenuImages] = useState({ images: [] });
  const [Reviews, setReviewss] = useState([]);
  
  const { id } = useParams();
  const settings = {
    dots: true,
    className:"variable-width",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : true,
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
    responsive : [
      {
        breakpoint : 1200,
        settings : {
          slidesToShow : 2,
          slidesToScroll : 1,
          infinite: true,
          dots : true
        },
      },
      {
        breakpoint : 600,
        settings : {
          slidesToShow : 2,
          slidesToScroll : 1,
          infinite: true,
          dots : true
        },
      },
      {
        breakpoint : 480,
        settings : {
          slidesToShow : 1,
          slidesToScroll : 1,
          infinite: true,
          dots : true
        },
      },
    ]

  };

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );


  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });
     
      dispatch(getReviews(reduxState?._id)).then((data) =>
      setReviewss(data.payload.reviews)
      // console.log({data})
    );
    }
  }, []);


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };


  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl">About this place</h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-red-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={menuImage}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisine</h4>
          <div className="flex flex-wrap gap-2">
          {reduxState?.cuisine.map((data) => (
                <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                {data}
            </span>
            ))}
          </div>

          <div className="my-4">
          <h4 className="text-lg font-medium ">Average Cost</h4>
         <h6> Rs {reduxState?.averageCost} for one order (approx.)</h6>
         <small className="text-gray-500">Exclusive of applicable taxes and charges , if any </small>

          </div>

          <div className="my-4">
          <h4 className="text-lg font-medium ">Similar Restaurants</h4>
        <Slider {...settings}>
        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/ce4/e72a59ed9395401be1ddcea433bf1ce4_1497730673.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" title="tea"/>
        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/ce4/e72a59ed9395401be1ddcea433bf1ce4_1497730673.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" title="tea"/>
        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/ce4/e72a59ed9395401be1ddcea433bf1ce4_1497730673.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" title="tea"/>
        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/ce4/e72a59ed9395401be1ddcea433bf1ce4_1497730673.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" title="tea"/>
        </Slider>
          </div>

<div className="my-4">
<h4 className="text-lg font-medium "> Rate your delivery experience</h4>
<ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
  {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}

</div>

<div className="my-4 w-full  md:hidden flex flex-col gap-4">
<Mapview   title={reduxState?.name} phno={`+91${reduxState?.contactNumber}`} mapLocation={getLatLong(reduxState?.mapLocation)} address={reduxState?.address}
/></div>

<div className="my-4 flex flex-col gap-4">
{/* <ReviewCard/> */}

</div>
        </div>


        <aside
          className="hidden md:flex md:w-4/12 sticky top-2 bg-white lg:ml-4 p-5  rounded-xl shadow-md flex flex-col gap-4 "
          style={{ height: "fit-content" }}
        >
<Mapview   title={reduxState?.name}
            phno={`+91${reduxState?.contactNumber}`}
            mapLocation={getLatLong(reduxState?.mapLocation)}
            address={reduxState?.address}
/>
        </aside>
      </div>
    </>
  ); 
};

export default Overview;
