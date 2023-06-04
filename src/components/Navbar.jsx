import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { NavData } from "../constants";
import {logo,menu,close} from "../assets"
const Navbar=()=>{
    const[active,setActive]=useState("");
    const[toggle,setToggle]=useState(false);
    return(
        <nav className="sm:px-16 px-6 w-full flex items-center
        py-5 top-0 z-20 fixed bg-primary">
            <div  className="w-full flex justify-between
            items-center max-w-7xl mx-auto">
                <Link 
                to="/"
                className="flex items-center gap-2"
                onClick={()=>{
                    setActive("");
                    window.scrollTo(0,0);}}>
                        <img src={logo} alt="logo"
                        className="w-9 h-9 object-contain rounded-full"/>
                        <p className="text-white text-[18px] font-semibold cursor-pointer flex">SUSANTH &nbsp;
                        <span className="sm:block hidden"> | PORTFOLIO</span></p>
                    </Link>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
                        {NavData.map((dat)=>(
                            <li
                                key={dat.id}
                                className={`${active===dat.title? "text-white":"text-secondary"}
                                hover:text-[#02c3fc] text-[18px] font-medium cursor-pointer hover:animate-bounce`}
                                onClick={()=>setActive(dat.title)}
                                >
                                    <a href={`#${dat.id}`}>{dat.title}</a>
                                </li>
                        ))}
                    </ul>
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" 
                    onClick={()=> setToggle(!toggle)}/>
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-sky-800 to-cyan-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {NavData.map((nav) => (
                    <li
                        key={nav.id}
                        className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                        }font-poppings font-medium cursor-pointer text-[16px]`}
                        onClick={() =>{
                        setToggle(!toggle);
                        setActive(nav.title);}}
                        >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    </ul>
              </div>
            </div>
            </div>
        </nav>
    )
}
export default Navbar