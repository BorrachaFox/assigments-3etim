import { CardDiv } from './style'

export const Card = (props) => {
  return (
    <CardDiv className="assigment-card">
      <h2>{ props.data.title }</h2>
      <p>{ props.data.description }</p>
    </CardDiv>
  )
}