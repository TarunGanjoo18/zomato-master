import React,{useState ,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {AiOutlineCompass} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"

// Components
import FloatMenuBtn from '../../restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../restaurant/Order-Online/MenuListContainer'
import FoodItem from '../../restaurant/Order-Online/FoodItem'
import FoodList from '../../restaurant/Order-Online/FoodList'

import {getFoodList} from "../../../Redux/Reducer/Food/Food.action"

function OrderOnline() {
    const [menu, setMenu] = useState([]);

    const [selected, setSelected] = useState("");

    const onClickHandler = (e) => {
      if (e.target.id) {
        setSelected(e.target.id);
      }
      return;
    };
  
    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
      );
      const dispatch = useDispatch();
    

      useEffect(() => {
        reduxState &&
          dispatch(getFoodList(reduxState.menu)).then((data) =>
            setMenu(data.payload.menus.menus)
            // console.log({data})
          );
      }, [reduxState]);
    
    
    return (
        <>
          <div className="w-full h-screen flex">
              <aside className="hidden md:flex flex-col gap-4 border-r border-gray-300  w-1/4 ">
              {menu.map((item) => (
            <MenuListContainer
              {...item}
              key={item._id}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}

              </aside>
              <div className="w-full md:3/4 px-3">
                  <div className="pl-3 mb-4">
                  <h2 className="text-xl font-semibold">Order Online</h2>
                  <h4 className="flex items-center gap-2 font-light text-gray-500"><AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 45 min</h4>
                  </div>
                  <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                  {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))}

                  </section>
              </div>
              </div>  
              <FloatMenuBtn/>
        </>
    )
}

export default OrderOnline
