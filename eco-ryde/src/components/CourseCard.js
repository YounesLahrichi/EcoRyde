import React from "react";

function CourseCard(props) {
    return (
        <div className="test-box">
            <div className="search-group-info">
                <p>
                    <em>Title:</em> {props.title}
                </p>
                <p>
                    <em>Subject:</em> {props.title}
                </p>
                <p>
                    <em>Course:</em> {props.title}
                </p>
                <p>
                    <em>Instructor:</em> {props.title}
                </p>
            </div>
        </div>
    );
}

export default CourseCard;
