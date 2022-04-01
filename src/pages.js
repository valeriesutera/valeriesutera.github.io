import React from "react";
import {Link, useLocation} from "react-router-dom";
import {InstaFeeds} from './InstaFeeds'

function Header(){
    return(
    <nav>
        <Link to="/">Home </Link>
        <Link to="about">About </Link>
        <Link to="resume">Resume </Link>
        <Link to="contact">Contact Information </Link>
    </nav>
    )
}

export function Home(){
    return(
        <div>
            <h1>[Valerie Sutera's Website]</h1>
            <Header/>
        </div>
    );
}

export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Header/>
            <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
        </div>
    );
}

export function Resume(){
    return(
        <div>
            <h2>[WIP]</h2>
            <Header/>
        </div>
    );
}

export function Contact(){
    return(
        <div>
            <h1>[Contact Information]</h1>
            <Header/>
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