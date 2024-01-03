import React, { useEffect, useState } from "react";
import logo from '../assets/nice.png'
import '../App.css'
import Sidebar from "./Sidebare";
export default function Home(){
    return(
        <>
        
        <div className=" home pt-5 pb-5  bg-dark">
        <Sidebar/>
            <div className="container  d-flex justify-content-space-between 
            align-items-center">
            <div className=" col-6">
            <img class=" img-fluid" src={logo} alt=""/>
            </div>
            <div className=" col-6  ">
            <p className=" fw-bold"><span className="text-info">HI </span> , Here We Mange The Information THat Have A realation
            With Any Employe That Belong To Us And  If you are a Resposible Go To LoGin in The Top To Do That </p>
            </div>
            </div>

           
        </div>
        </>
    )
}