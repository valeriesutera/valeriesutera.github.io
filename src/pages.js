import React from "react";
import {Link, useLocation} from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[Valerie Sutera's Website]</h1>
            <nav>
                <Link to="about">About </Link>
                <Link to="resume">Resume </Link>
                <Link to="contact">Contact Information </Link>
            </nav>
        </div>
    );
}

export function About(){
    return(
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Resume(){
    return(
        <div>
            <h2>[WIP]</h2>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1>[Contact Information]</h1>
        </div>
    );
}

export function Whoops404(){
    let location = useLocation();
    return(
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
        </div>
    )
}