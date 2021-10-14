import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
// For avatars
import gravatar from "gravatar";

// Components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

// redux actions
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";

const MobileNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const reduxState = useSelector((global) => global.user.user);
  const signOutHandlerButton = () => dispatch(signOut());
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <div className="w-28 ">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button
          className="text-white px-3 py-2 rounded-full"
          style={{ backgroundColor: "rgb(226,55,68)" }}
        >
          Use App
        </button>

        {reduxState?.user?.fullname ? (
          <>
            {" "}
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
            >
              <img
                src={gravatar.url(reduxState?.user?.email)}
                alt={reduxState?.user?.email}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button onClick={signOutHandlerButton}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 rounded-full"
              style={{ color: "rgb(226,55,68)" }}
            >
              <FaUserAlt />
            </span>
            {isDropDownOpen && (
              <div className="shadow-lg absolute z-10 -bottom-16 right-0 flex flex-col gap-2 bg-white w-full">
                <button onClick={SignIn}>Sign In</button>
                <button onClick={SignUp}>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const MediumNav = ({ SignIn, SignUp }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const reduxState = useSelector((global) => global.user.user);
  const signOutHandlerButton = () =>  dispatch(signOut())
  return (
    // <div className="hidden md:block container px-2 mx-auto lg:px-20">
    //   <div className="hidden  md:flex items-center w-full gap-3 justify-between ">
    //     <div className="w-full md:flex items-center gap-5 lg:w-4/5">
    //       <div className="w-28 ">
    //         <img
    //           src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    //           alt="Logo"
    //           className="w-full h-full"
    //         />
    //       </div>
    //       <div className="w-full bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3">
    //         <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
    //           <span className="" style={{ color: "rgb(226,55,68)" }}>
    //             <HiLocationMarker />
    //           </span>
    //           <input
    //             type="text"
    //             placeholder="Pune"
    //             className="focus:outline-none"
    //           />
    //           <IoMdArrowDropdown />
    //         </div>
    //         <div className="flex items-center gap-2 w-full">
    //           <RiSearch2Line />
    //           <input
    //             type="search"
    //             placeholder="Search for restaurant, cuisine or a dish"
    //             className="w-full focus:outline-none"
    //           />
    //         </div>
    //       </div>

    //     </div>
    //     <div className="flex items-center gap-2 lg:gap-8 ">
    //       <button
    //         onClick={SignIn}
    //         className="text-gray-500 hover:text-gray-800 text-xl"
    //       >
    //         Login
    //       </button>
    //       <button
    //         onClick={SignUp}
    //         className="text-gray-500 hover:text-gray-800 text-xl"
    //       >
    //         Signup
    //       </button>
    //     </div>

    //   </div>
    // </div>
    <div className="hidden lg:inline container px-20 mx-auto">
    <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
          <span className="text-zomato-400">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="Pune"
            className=" focus:outline-none"
          />
          <IoMdArrowDropdown />
        </div>
        <div className="flex w-full items-center gap-2">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurant, cuisine or a dish"
            className="w-full focus:outline-none"
          />
        </div>
      </div>
      {reduxState?.user?.fullname ? (
        <div className="relative w-20">
          <div
            onClick={() => setIsDropDownOpen((prev) => !prev)}
            className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
          >
            <img
              src={gravatar.url(reduxState?.user?.email)}
              alt={reduxState?.user?.email}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {isDropDownOpen && (
            <div className="absolute shadow-lg py-3  -right-4 w-full bg-white z-30 flex flex-col gap-2">
              <button onClick={signOutHandlerButton}>Sign Out</button>
            </div>
          )}
        </div>
      ) : (
        <div className="ml-28 flex gap-4 ">
          <button
            onClick={SignIn}
            className="text-gray-500 text-xl hover:text-gray-800"
          >
            Login
          </button>
          <button
            onClick={SignUp}
            className="text-gray-500 text-xl hover:text-gray-800"
          >
            Signup
          </button>
        </div>
      )}
    </div>
  </div>

  );
};

// const LargeNav =()=>{
//     return <div className="hidden  md:flex items-center w-full gap-3 lg:w-3/4">
//           <div className="w-28 ">
//                     <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Logo" className="w-full h-full"/>
//                 </div>
//                 <div className="w-full bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3"  >
//                     <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
//                               <span className="" style={{color : "rgb(226,55,68)" }}>
//                                   <HiLocationMarker/></span>
//                               <input type="text" placeholder="Pune" />
//                               <IoMdArrowDropdown/>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <RiSearch2Line/>
//                         <input type="search" placeholder="Search for restaurant, cuisine or a dish" />
//                     </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <button className="text-gray-500 hover:text-gray-800 text-xl">Login</button>
//                     <button className="text-gray-500 hover:text-gray-800 text-xl">Signup</button>
//                 </div>
//     </div>
// }

const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInModal = () => setOpenSignin(true);
  const openSignUpModal = () => setOpenSignup(true);
  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="p-4 flex items-center bg-white shadow-lg lg:shadow-none">
        <MobileNav SignIn={openSignInModal} SignUp={openSignUpModal} />
        <MediumNav SignIn={openSignInModal} SignUp={openSignUpModal} />
        {/* <LargeNav/> */}
      </nav>
    </>
  );
};

export default Navbar;
