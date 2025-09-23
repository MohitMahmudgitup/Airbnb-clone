import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'

const MenuOpen = () => {
  return (
     <div className="absolute right-0 top-16 py-2 bg-white shadow-2xl rounded-xl  w-64">
                        <div className="flex flex-col space-y-1 text-sm text-gray-700">
                            <button className="text-left hover:bg-zinc-100 py-2 pl-4 flex items-center gap-2"> <IoIosHelpCircleOutline size={20}/> Help Center</button>
                            <div className="border-t " />
                            <div className="hover:bg-zinc-100 flex py-2 cursor-pointer px-4">
                                <div>
                                    <button className="text-left  font-semibold ">
                                        Become a host
                                    </button>
                                    <p className="text-xs text-gray-500">
                                        It's easy to start hosting and earn extra income.
                                    </p>


                                </div>

                                <img
                                    className="w-12 h-12"
                                    src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/5347d650-16de-4f5a-a38e-79edc988befa.png"
                                    alt="Services" />

                            </div>
                            <div className="border-t" />
                            <button className="text-left text-base hover:bg-zinc-100 py-2 pl-4">Find a co-host</button>
                            <button className="text-left text-base hover:bg-zinc-100 py-2 pl-4">Gift cards</button>
                            <div className="border-t" />
                            <button className="text-left text-base hover:bg-zinc-100 py-2 pl-4">Log in or sign up</button>
                        </div>
                    </div>
  )
}

export default MenuOpen
