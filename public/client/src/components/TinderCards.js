import React, { useState }from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople]=useState([
        {
            name:"Elon",
            url:"https://cdn.images.express.co.uk/img/dynamic/151/590x/Elon-Musk-Who-is-Elon-Musk-SpaceX-founder-743465.jpg"
        },
        {
            name:"jeff",
            url:"https://cdn.images.express.co.uk/img/dynamic/151/590x/Elon-Musk-Who-is-Elon-Musk-SpaceX-founder-743465.jpg"
        }
    ]);
    const swiped = (direction, nameToDelete) =>{
        console.log("removing:" + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame =(name) =>{
        console.log(name +"left the screen!");

    };
    return (
        <div className= "tinderCards">
            <div className="tinderCards__cardContainer">
            
            {people.map((person) =>(
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe ={(dir) => swiped(dir, person.name)}
                onCardleftScreen={()=>
                    outOfFrame(person.name)}></TinderCard>

            )
            )}
        </div>
        </div>
    )
}

export default TinderCards;
