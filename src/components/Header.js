// import {useContext} from "react";
// // import {Link} from "react-router-dom";
// import {UserContext} from "./UserContext.jsx";

import React from "react";
import Image from "next/image"
import { TbWorld } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    // const {user} = useContext(UserContext);
        return (
            
            <div className="border-b sticky top-0 z-50 bg-white/[95%] p-4">
                <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 gap-1 my-auto ">

                        {/* Left */}
                    <div className="h-20 flex fill-none">
                    <Image
                        src="/airbnb.png"
                        alt="LogoAirbnb"
                        width={100}
                        height={20}
                    />
                </div>

                        {/*MIDDLE*/}
                    <div className="sm:mx-6 hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full py-2 px-4">
                        <input
                            type="search"
                            placeholder=""
                            className="w-[20rem] rounded-full outline-0"
                        />

                    <div className="flex items-center absolute w-full pl-6 font-semibold text-gray-600 text-[14px] pr-3">
                        <button className="w-full items-center">N'importe où</button>
                        <button className="w-full flex-auto items-center border-l border-x">Une semaine</button>
                        <button className="w-full flex-auto items-center justify-center text-gray-600/60">Ajout voyageurs</button>
                    </div>

                    <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
                        <FiSearch className="text-white w-full" />
                    </div>
                </div>


                    {/*RIGHT*/}
                <div className="flex items-center pr-3 font-semibold text-gray-600 sm:mx-6">
                        <p className="text-[18px]">Mettre mon logement sur Airbnb</p>
                    <div className="flex items-center mx-8 gap-1">
                        <TbWorld className="" />
                <div className="">EN</div>
                    </div>
                    <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
                        <p>Sign in</p>
                        <FaUserCircle className="text-[22px]"/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Header;