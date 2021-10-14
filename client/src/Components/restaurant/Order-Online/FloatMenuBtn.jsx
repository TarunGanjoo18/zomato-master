import React,{useState} from 'react'
import {HiOutlineMenu} from "react-icons/hi"
import {GrFormClose} from "react-icons/gr"


// component 
import MenuListContainer from './MenuListContainer'

function FloatMenuBtn() {
    const [isClicked, setIsClicked] = useState(false)

    const toggleMenu = () =>{
         setIsClicked((prev)=> !prev)
    }
    return (
        <>
        <div className="z-30 fixed bottom-2 w-8/12 gap-3 flex flex-col items-end  right-2 md:hidden">
            {
                isClicked && (
                    <div className="p-3 bg-white h-48 overflow-y-scroll">
                <MenuListContainer/>
            </div>
                )
            }
            
            <button onClick={toggleMenu} className=" flex items-center justify-between gap-2  text-white bg-yellow-800 px-3 py-2 rounded-full md:hidden">
           {isClicked ? <GrFormClose/> : <HiOutlineMenu/>}     Menu
                </button>
        </div>
        </>
    )
}

export default FloatMenuBtn
