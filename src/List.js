import React from 'react';
import Card from './Card.js';
import './List.css';
//handleAdd belongs here
export default function List(props) {
    return (
       <section className="List">
           <header className="List-header"> 
            <h2>{props.header}</h2> 
           </header>
           <div className="List-cards">
              {props.cards.map((card) =>
               <Card
                    title={card.title}
                    content={card.content}
                    key={card.id}
                    id={card.id}
                    handleDelete={props.handleDelete}
                    />
               )}
               <button
                    type='button'
                    className='List-add-button'
                    onClick={() => {props.handleAdd(props.id)}}>
                        + Add Random Card
                </button>
           </div>
       </section>
    )
}
