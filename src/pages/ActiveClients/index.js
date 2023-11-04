import React from "react";
import Nav from "../../components/nav";
import Category from "../../components/category";
import Search from "../../components/search";
import CardClient from "../../components/cardClient";
import "./ActiveClients.css"

function ActiveClients(){
    return(
        <div className="body-container"> 
            <Nav/>
            <Category/>
            <Search/>
            <CardClient/>
            <CardClient/>
            <CardClient/>
            <CardClient/>
            <CardClient/>
            <CardClient/>


        </div>
    );
}

export default ActiveClients;