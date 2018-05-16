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
        <div className="contentBox">
          <div className="infoText">
            <p><h2>Welcome to 2018's greates summer party!</h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris tincidunt sem sed arcu. Curabitur vitae diam non enim vestibulum interdum. Praesent in mauris eu tortor porttitor accumsan. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Etiam neque. Fusce aliquam vestibulum ipsum. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Maecenas libero. Vivamus luctus egestas leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam at arcu a est sollicitudin euismod. Phasellus rhoncus. Donec vitae arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. In sem justo, commodo ut, suscipit at, pharetra vitae, orci.</p>
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
