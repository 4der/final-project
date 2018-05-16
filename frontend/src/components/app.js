import React from "react"
import Footer from "./footer"
import GoogleMaps from "./googleMaps"
import Hero from "./hero"
import ImageBar from "./imageBar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      allergies: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8081/guest", {
      method: "POST",
      headers: {
        Accept: "application/json, textplain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.status === 201) {
        this.setState({
          name: "",
          email: "",
          alleriges: ""
        })
      }
    }).catch(err => {
      // api down? request failed?
      console.log("Error!", err)
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmail = event => {
    this.setState({
      email: event.target.value
    })
  }

  handleAllergies = event => {
    this.setState({
      allergies: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Hero />
        <div className="infoText">
          <p>Text, info about party etc!</p>
        </div>
        <form onSubmit={this.handleSubmit} >
          <div className="boxes" id="f1">
            <label>
              <h3>Name:</h3>
              <input
                name="userName"
                type="text"
                value={this.state.userName}
                onChange={this.handleName} />
            </label>
            <label>
              <h3>Email:</h3>
              <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleEmail} />
            </label>
            <label>
              <h3>Allergies:</h3>
              <textarea
                name="allergies"
                type="text"
                value={this.state.alleriges}
                onChange={this.handleAllergies} />
            </label>
          </div>
          <div className="submitButton">
            <button type="submit">Submit</button>
          </div>
          <div className="pP">
            <img className="parrot" src={require('../images/tenor-57282185.gif')}alt="feeling" />
          </div>
          <ImageBar />
          <GoogleMaps />
          <Footer />
        </form>
      </div>
    )
  }
}

export default App
