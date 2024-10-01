import React from "react";
import star from "../public/images/star.jpg";

export default function Card(props) {
    // console.log(props);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 
    // else {
    //     badgeText = "OFFLINE"
    // }

    return (
        <div className="card">
            {/* {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div> } */}
            {/* <div className="card--badge">{badgeText}</div> */}
            {badgeText && <div className="card--badge">{badgeText}</div> }

            <img 
                src={props.item.coverImg} 
                className="card--image" 
                alt="Main card image."
            />
            <div className="card--stats">
                <img 
                    src={star} 
                    className="card--star"
                    alt="Star icom."
                />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) · </span>
                <span className="grey">{props.item.location}</span>
            </div>
            <h2 className="card--title">{props.item.title}</h2>
            <p><span className="bold">From ${props.item.price}</span> / preson</p>
        </div>
    )
}

