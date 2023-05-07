import React from "react";

function CourseCard(props) {
    return (
        <div>
            <div className="search-group-info">
                <p>
                    <b>Event Name:</b> {props.title}
                </p>
                <p>
                    <b>Event Location:</b> {props.author}
                </p>
                <p>
                    <b>Arrival Time:</b> {props.title}
                </p>
                <p>
                    <b>Driver:</b> {props.title}
                </p>
                <p>
                    <b>Capacity Left:</b> {props.title}
                </p>
                <div className="requestButton">
                    <button className = "woofButton" onClick={console.log("test")}>Request to Join</button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;