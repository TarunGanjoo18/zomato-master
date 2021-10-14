import React from 'react'
import classNames from 'classnames';
import { useLocation , Link , useParams} from 'react-router-dom';

const Tabs =(props) => {
    const {id} = useParams(); 
    return <Link to={`/restaurant/${id}/${props.route}`} >
        <div className={classNames("text-gray-500 font-regular relative " , {"text-red-400 font-semibold border-b-2 border-red-400 " : props.isActive })}>
            {/* <div className="absolute w-full h-2  z-20"></div> */}
            <h3 className="text-lg md:text-xl">{props.title}</h3>
        </div>
    </Link>
};

function TabsContainer(props) {

    const location = useLocation();
    const currentPath = location.pathname;  

    const  tabs=[
        {
            title : "Overview",
            route : "overview",
            isActive : currentPath.includes("overview"),
        },
        {
            title : "Order Online",
            route : "order-online",
            isActive : currentPath.includes("order-online"),
        },
        {
            title : "Reviews",
            route : "reviews",
            isActive : currentPath.includes("reviews"),
        },
        {
            title : "Menu",
            route : "menu",
            isActive : currentPath.includes("menu"),
        },
        {
            title : "Photos",
            route : "photos",
            isActive : currentPath.includes("photos"),
        },
    ]

    return (
        <>
             <div className="flex relative items-center gap-8 md:gap-20 pb-3 overflow-x-scroll md:overflow-hidden  ">
                        {
                            tabs.map((tab)=>
                                <Tabs {...tab} key={`123${tab.route}`}/>
                            )
                        }
             </div>
        </>
    )
}

export default TabsContainer
