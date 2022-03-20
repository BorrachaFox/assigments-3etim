import { useState } from 'react'
import dateFormat from 'dateformat';
import { CardDiv, CardHeader, CardFooter } from './style'

export const Card = (props) => {
  /* props.data.date */
  const [isOpen, setIsOpen] = useState(false)

  const dateTimestamp = new Date(props.data.date.seconds * 1000);
  const deliveryDate = dateFormat(dateTimestamp, "dd/mm");

  return (
    <CardDiv 
      className="assigment-card" 
      id={props.id} 
      onClick={() => isOpen ? setIsOpen(false): setIsOpen(true)}
    >
        <CardHeader>
          <h2>{ props.data.title }</h2>
        </CardHeader>

        {isOpen && <div className='description'>
          <p>{ props.data.description || 'No description 😥' }</p>
        </div>}

        <CardFooter>
          <p>{ props.data.subject }</p>
          <p className='date'>{ deliveryDate }</p> 
        </CardFooter>
    </CardDiv>
  )
}