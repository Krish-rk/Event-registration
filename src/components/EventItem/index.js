const EventItem = props => {
  const {item, eventClicked} = props
  const {name, location, imageUrl, id, registrationStatus} = item
  const clickedItem = () => {
    eventClicked(id, registrationStatus)
  }
  return (
    <li>
      <button onClick={clickedItem}>
        <img src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
