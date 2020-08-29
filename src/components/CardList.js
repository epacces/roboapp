import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    
    const cardComponents = robots.map( ({ id, name, email }) => {
        return <Card key={id} id={id} name={name} email={email} />
    })

    return (
        <div>
            { cardComponents }
        </div>
    );
}

export default CardList;