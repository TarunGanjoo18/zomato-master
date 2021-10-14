import React from 'react'
import {IoMdArrowDropdown} from 'react-icons/io'

const PictureCarouselCard = () => {
    return (
        <>
            <div className="w-full h-64 relative rounded-lg  overflow-hidden">
                <div className="mx-8  w-full">

                <img  src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp" alt="food"
                 className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg" />
                 <div className="absolute bottom-0 text-white w-full h-full rounded-lg">
                     <div className="w-full h-full" style={{zIndex:"-3",background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.5) 85%)"}}></div>
                     <h4 className="absolute  left-3  bottom-8 z-10">Onam Special</h4>
                     <h6 className="absolute left-3  bottom-2 z-10 flex flex-row items-center" >15 Places <IoMdArrowDropdown   /></h6>
                 </div>
                 </div>
            </div>
    </>
    )
}

export default PictureCarouselCard
