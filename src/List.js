import React from 'react';
import Card from './Card';

export default function List(props) {
    // const Cards = props.map((card) => 
    //            <div className="Card">
    //                <button type="button">delete</button>
    //                <h3>{card.title}</h3>
    //                <p>{card.content}</p>
    //            </div> 
    //             )
    return (
       <section className="List">
           <header className="List-cards"> 
            <h2>{header}</h2> 
           </header>
           <div className="List-cards">
               <Card />
           </div>
       </section>
    )
}
