import React from 'react'
import {TiStar} from "react-icons/ti"

function MenuSimilarRestaurantCard(props) {
    return (
        <>
            <div className="mx-4">
            <div className=" bg-white shadow rounded-md ">
        <div className="w-full h-48">
          <img
          src ={props.image}
            alt="food"
            className="rounded-t-md w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <h3 className=" font-semibold text-lg">{props.title}</h3>
          <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                  <span className="flex items-center gap-1 bg-green-700 text-white px-2 py-1 rounded">40<TiStar/></span>
                  Dining
              </span>
              <span className="w-2 h-6 pr-2 border-r border-gray-500">
                    
              </span>

              <span className="flex items-center gap-1 ">
                  <span className="flex items-center gap-1 bg-green-700 text-white p-1 rounded">40<TiStar/></span>
                  Dining
              </span>
          </div>
          <h4>Street Food , Beverages , Tea</h4>
        </div>
      </div>
            </div>
        </>
    )
}

export default MenuSimilarRestaurantCard
