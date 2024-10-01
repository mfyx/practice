import React from "react";
//import star from "./star.jpg";
import star from "../public/images/star.jpg";

export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img 
                src={props.img} 
                className="card--image" 
                alt="Main card image."
            />
            <div className="card--stats">
                <img 
                    src={star} 
                    className="card--star"
                    alt="Star icom."
                />
                <span>{props.rating}</span>
                {/* <span>5.0</span> */}
                <span className="grey">({props.reviewCount}) · </span>
                <span className="grey">{props.country}</span>
                {/* <span className="grey">USA</span> */}
            </div>
            <h2>{props.title}</h2>
            {/* <h2>Life Lessons with Katie Zaferes</h2> */}
            <p><span className="bold">From ${props.price}</span> / preson</p>
            {/* <p><span className="bold">From $136</span> / preson</p> */}
        </div>
    )
}

