const ActiveEventRegistrationDetails = props => {
  const {registerForEvent, registrationStatus, id} = props

  const enableRegistration = () => {
    registerForEvent(id)
  }
  const registered = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const yettoRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button onClick={enableRegistration}>Register Here</button>
    </div>
  )
  const closed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  switch (registrationStatus) {
    case 'REGISTERED':
      return registered()
    case 'YET_TO_REGISTER':
      return yettoRegister()
    case 'REGISTRATIONS_CLOSED':
      return closed()
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
