import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiBeer } from "react-icons/bi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import classNames from "classnames";

const MobileTab = () => {
  //   const [allTypes, setAlltypes] = useState([
  //     {
  //       id: "delivery",
  //       icon: <RiShoppingBag3Line />,
  //       name: "Delivery",
  //       isActive: false,
  //     },
  //     {
  //       id: "dining",
  //       icon: <IoFastFoodOutline />,
  //       name: "Dining Out",
  //       isActive: false,
  //     },
  //     {
  //       id: "night",
  //       icon: <BiBeer />,
  //       name: "Night Life",
  //       isActive: false,
  //     },
  //     {
  //       id: "nutrition",
  //       icon: <AiOutlineMedicineBox />,
  //       name: "Nutrition",
  //       isActive: false,
  //     },
  //   ]);

  const allTypes = [
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
    },
    {
      id: "night",
      icon: <BiBeer />,
      name: "Night Life",
    },
    {
      id: "nutrition",
      icon: <AiOutlineMedicineBox />,
      name: "Nutrition",
    },
  ];
  const { type } = useParams();

  //   useEffect(() => {
  //     if (type) {
  //       const updateTypes = allTypes.map((item) => {
  //         if (item.id === type) {
  //           return { ...item, isActive: true };
  //         }
  //         return item;
  //       });
  //       setAlltypes(updateTypes);
  //     }
  //   }, [type]);

  return (
    <>
      <div className="bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border md:justify-evenly lg:hidden">
        {allTypes.map((items) => (
          <Link to={items.id}>
            <div
              className={
                type === items.id
                  ? "flex flex-col relative items-center text-lg text-red-600"
                  : "flex flex-col items-center text-lg text-red-600 "
              }
            >
              {items.icon}
              <div
                className={
                  type === items.id &&
                  "absolute -top-3 w-full h-2 border-t-2 pt-1 border-red-600"
                }
              ></div>
              <h5 className="text-sm md:text-xl">{items.name}</h5>
            </div>
          </Link>
        ))}
        {/* <div className="flex flex-col items-center text-lg">
        <IoFastFoodOutline/>
          <h5 className="text-sm md:text-xl">Dining Out</h5>
        </div>
        <div className="flex flex-col items-center text-lg">
          <BiBeer />
          <h5 className="text-sm md:text-xl">Night Life</h5>
        </div>
        <div className="flex flex-col items-center text-lg">
          <AiOutlineMedicineBox />
          <h5 className="text-sm md:text-xl">Nutrition</h5>
        </div> */}
      </div>
    </>
  );
};

const LargeTab = () => {
  const allTypes = [
    {
      id: "delivery",
      name: "Delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      activeColor: "yellow",
    },
    {
      id: "dining",
      name: "Dining Out",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",
    },
    {
      id: "night",
      name: "Night Life",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",
    },
    {
      id: "nutrition",
      name: "Nutrition",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow",
    },
  ];
  const { type } = useParams();

  return (
    <>
      <div className="hidden  lg:flex gap-14 container px-20 my-8 mx-auto">

        {allTypes.map((items) => (
            <Link to={items.id}>
          <div className={classNames("flex items-center gap-3 pb-2 transition duration-500 easy-in-out" , {"border-b-2 border-red-600" : type===items.id})}>

            <div className={`w-20 h-20 bg-${type === items.id ? items.activeColor : "gray"}-200 p-3 rounded-full cursor-pointer`}>
              <img
                src={
                    type === items.id ? items.imageActive : items.imageDefault
                }
                alt={items.name}
                className="w-full h-full"
              />
            </div>
            <h3 className={type===items.id ? "text-xl text-red-700 font-semibold" : "text-xl text-gray-700 font-semibold"}>{items.name}</h3>
          </div>
          </Link>
        ))}
        {/* <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-gray-200 p-3 rounded-full cursor-pointer">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
              alt="delivery"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-gray-200 p-3 rounded-full cursor-pointer">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt="delivery"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Night Life</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 bg-gray-200 p-3 rounded-full cursor-pointer">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
              alt="delivery"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
        </div> */}
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <MobileTab />
      <LargeTab />
    </>
  );
};

export default FoodTab;
