import React from "react";
import Nav from "../../components/nav";
import Category from "../../components/category";
import Search from "../../components/search";

function ActiveClients(){
    return(
        <div className="body-container"> 
            <Nav/>
            <Category/>
            <Search/>

        </div>
    );
}

export default ActiveClients;