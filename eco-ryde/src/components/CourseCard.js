import React from "react";

function CourseCard(props) {
    return (
        <div className="test-box">
            <div className="search-group-info">
                <p>
                    <em>Event Name:</em> {props.title}
                </p>
                <p>
                    <em>Event Location:</em> {props.author}
                </p>
                <p>
                    <em>Arrival Time:</em> {props.title}
                </p>
                <p>
                    <em>Driver:</em> {props.title}
                </p>
                <p>
                    <em>Capacity Left:</em> {props.title}
                </p>
                <div className="requestButton">
                    <button className = "woofButton" onClick={console.log("test")}>Request to Join</button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;