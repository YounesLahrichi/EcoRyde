
function HostElement(props){
    return(
        <div className="rideElement">
            <h3 className="rideElementDiv1">{props.title}</h3>
            <p className="rideElementDiv2">{props.time}</p>
            <button className="rideElementDiv3">Cancel Host</button>
        </div>
    )
}

export default HostElement;