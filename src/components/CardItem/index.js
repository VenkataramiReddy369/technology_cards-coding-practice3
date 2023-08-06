import './index.css'

const CardItem = props => {
  const {cardsList, key} = props
  const {title, className, description, imageUrl} = cardsList
  return (
    <li className="bg-container">
      <div className={className}>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description} </p>
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default CardItem
