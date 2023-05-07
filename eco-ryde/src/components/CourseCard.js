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
                <p>
                <a href="mailto:email@ecoryde.uw.edu">
                    <span className="material-icons">email(!) </span> email@ecoryde.uw.edu
                </a>
                </p>
            </div>
        </div>
    );
}

export default CourseCard;
