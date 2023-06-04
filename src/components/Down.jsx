import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { footerdata } from "../constants";
import {logo,menu,close} from "../assets"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Down=()=>{
    const[active,setActive]=useState("");
    const[toggle,setToggle]=useState(false);
    return(
        <nav className="sm:px-16 px-6 w-full flex items-center
        py-5 top-0 z-20  bg-primary">
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
                        </p>
                    </Link>
                    <ul className="list-none sm:flex flex-row gap-10">
                        <li>
                            <a
                            href="https://github.com/susanth-24/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fab fa-github text-2xl w-8 h-8 cursor-pointer mr-14"
                            ></a>
                            <a
                            href="https://www.linkedin.com/in/sai-susanth-reddy-sanam-a1b7a9223/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fab fa-linkedin text-2xl w-8 h-8 cursor-pointer mr-14"
                            ></a>
                            <a
                            href="https://www.instagram.com/susanth_24ig/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fab fa-instagram text-2xl w-8 h-8 cursor-pointer mr-10"
                            ></a>
                        </li>
                        </ul>
            </div>
        </nav>
    )
}
export default Down