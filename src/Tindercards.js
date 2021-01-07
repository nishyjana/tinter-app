import React, { useState} from 'react';
import './TinderCards.css'
import TinderCard from "react-tinder-card";

export default function Tindercards() {

 const [people, setPeople] = useState([
     {
       name: "Elon Musk",
       url:
       "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"
    },
    {
        name: "Jeff Bezoz",
        url:
        "https://i.guim.co.uk/img/media/f2b1af06ce6fb433f3de5beef32e05ce37967981/0_221_4896_2936/master/4896.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=02952975a786767f544368a3e208820d"

    }
]);
const swiped =(direction,nameToDelete)=>{
    console.log("removeing", +nameToDelete);
  

}
const outOfFrame =(name)=>{
    console.log(name+'left of scrren');
 

}

 
  return <div className="tinderCards">
      <div className="tinderCards__cardContainer">
      {people.map((person)=>(
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up','down']}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
         >
             <div style={{backgroundImage:  `url(${person.url})`}}
             className="card"

             >
                 <h2>{person.name}</h2>
             </div>

          </TinderCard>
      ))}
  
     

      </div>
     
      
    </div>
  
}
