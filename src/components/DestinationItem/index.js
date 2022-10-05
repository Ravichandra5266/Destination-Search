import './index.css'

const DestinationItem = props => {
  const {details} = props

  const {imgUrl, name} = details

  return (
    <li className="list-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
