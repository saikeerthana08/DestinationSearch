// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-items-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="text">{name}</p>
    </li>
  )
}

export default DestinationItem
