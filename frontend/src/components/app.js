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
    fetch("https://final-projectea.herokuapp.com/guest", {
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
        <div className="contentBox">
          <div className="infoText">
            <p><h2>Welcome to 2018's greates summer party!</h2>
              Come celebrate summer ☀️, and that Im done with my studies at awesome Technigo! 👑 Drinks, food and awesome weather is promised!
            I'ts going to be fun, and loads of surprises, I guarantee that! 🎉</p>
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
          </form>
        </div>
        <ImageBar />
        <GoogleMaps />
        <Footer />
      </div>
    )
  }
}

export default App
