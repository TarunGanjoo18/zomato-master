import React from "react"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import { useDispatch } from "react-redux";

// Redux Action
import { signIn } from "../../Redux/Reducer/Auth/Auth.action";

export default function SignIn({isOpen, setIsOpen}) {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));


  function closeModal() {
    setIsOpen(false)
  }

  const submit = () => {
    setUserData({
      email: "",
      password: "",
    });
    dispatch(signIn(userData));
  };

  const googlesignin = () =>
    (window.location.href = "http://localhost:4000/auth/google");


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
           
                </Dialog.Title>
                <div className="mt-2 w-full flex flex-col gap-3 ">
              <button onClick={googlesignin} className=" rounded-lg justify-center flex py-2 items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-700">SignIn With Google <FcGoogle/> </button>

              <form action="" className="flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email">Email</label>
                      <input 
                       type="text"
                       id="email"
                       name="email"
                       onChange={handleChange}
                       value={userData.email}
                      placeholder="email@email.com" 
                      className="w-full border border-gray-400 focus:outline-none focus:border-red-400 px-3 py-2 rounded-lg"/>
                    </div>
              <div className="w-full flex flex-col gap-2">
                      <label htmlFor="Password">Password</label>
                      <input
                      type="password"
                      id="password"
                      placeholder="*********"
                      value={userData.password}
                      name="password"
                      onChange={handleChange}
                        className="w-full border border-gray-400 focus:outline-none focus:border-red-400 px-3 py-2 rounded-lg"/>
                    </div>
                <div 
                   onClick={submit}
                   className="text-center w-full bg-red-400 text-white py-2 rounded-lg">
                    SignIn
                </div>
                   
              </form>
                </div>

            
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
