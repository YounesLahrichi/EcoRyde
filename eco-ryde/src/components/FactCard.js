import React from "react";

export default function FactCard(props) {
    return (
        <div className="fact-card">
            <div className="notes-group-info">
                <h1>
                    {props.title}
                </h1>
                <p>
                    {props.filler}
                </p>
            </div>
        </div>
    );
}