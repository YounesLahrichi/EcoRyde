import React from "react";

export default function FactCard(props) {
    return (
        <div className="fact-card">
            <div className="notes-group-info">
                <h2 className="factCardHeader">
                    {props.title}
                </h2>
                <p className="factCardFiller">
                    {props.filler}
                </p>
            </div>
        </div>
    );
}