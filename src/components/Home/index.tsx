import React from "react";
import { useLocation } from "react-router-dom";
import './style.css';
export const Home = () => {
    const location = useLocation();
    const {state} = location;
    return (
    <div>
        <h1>Home</h1>
        <p>{state as string}</p>
    </div>
    );
}