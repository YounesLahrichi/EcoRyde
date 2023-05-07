import React, {useContext} from "react";
import NavBarJSX from '../components/NavBar.jsx';
import Footer from "../components/Footer.js";
import FactCard from "../components/FactCard.js";

export default function Home() {
    return (
        <div className="containerFill">
            <NavBarJSX className="headerFill"/>
            <div className="contentFill">
                <h1 className="headerHome">Why EcoRyde?</h1>
                <div className="home-card-container">
                    <FactCard 
                    title = "Contribute to a Healthier Planet"
                    filler = "Reducing carbon emissions through ride-sharing to events can help contribute to a healthier planet. Climate change is a significant threat to our planet and our health, and every small action we take to reduce our impact can make a difference. By carpooling to events, we can help reduce our carbon footprint and contribute to a healthier planet for ourselves and future generations."/>
                    <FactCard 
                    title = "Make a Positive Impact on the Environment"
                    filler = "By choosing to ride-share to events, you can make a positive impact on the environment. Every car that is taken off the road can help to reduce carbon emissions and improve air quality. By making small changes to our daily routines, such as carpooling, we can help to create a more sustainable future for ourselves and future generations."/>
                    <FactCard 
                    title = " Lower Carbon Footprint"
                    filler = "Ride-sharing to events is also an environmentally friendly option that can help reduce your carbon footprint. When multiple people share a ride, there are fewer emissions from cars on the road, which can significantly reduce air pollution. By reducing the number of cars on the road, ride-sharing can help mitigate the impact of transportation on the environment."/>
                    <FactCard
                    title ="Support Sustainable Transportation"
                    filler = "Ride-sharing to events can help promote sustainable transportation. By choosing to carpool, you are making a conscious decision to reduce your environmental impact and support sustainable practices. This can help promote awareness of the need for sustainable transportation and encourage others to make similar choices in their daily lives."/>
                    <FactCard
                    title ="Reduce Traffic Congestion"
                    filler = "Ride-sharing to events is an excellent way to reduce traffic congestion. When multiple people carpool together, there are fewer cars on the road, which means less traffic and fewer delays. This can help reduce the time it takes to get to the event and make the commute less stressful."/>
                    <FactCard
                    title ="Save on Fuel Costs"
                    filler = "Ride-sharing to events can also help you save on fuel costs. By sharing the cost of transportation, you can reduce the amount of money you spend on gas and other expenses associated with driving. This can make attending events more affordable and help you save money in the long run."/>
                
                </div>
            </div>
            <Footer className="footerFill"/>
        </div>
    )
}