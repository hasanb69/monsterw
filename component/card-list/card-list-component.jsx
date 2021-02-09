import React from 'react'
import Card from '../card/card.component'
import './card-list.css'
function Cardlist(props) {
    return (
        <div className='cardlist'>
           
           {props.monster.map(item=>(
           <Card key={item.id}  monster={item}/>
         ))} 
        </div>
    )
}

export default Cardlist
