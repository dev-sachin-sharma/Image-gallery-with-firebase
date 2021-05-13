import React, { Component } from 'react'
import firebase from './firebase'

class App extends Component {
constructor(props) {
  super(props)
  this.state = {
     file:null,

  }
}

handleChange=(f)=>{
  this.setState({
    file:f
  })
}
handleSave=()=>{
  
}


  render() {
    return (
      <div>
        <input type="file" onChange={(e)=>{this.handleChange(e.target.files)}}/>
        <button onClick={}>Save</button>
        <img id="new-img"/>
      </div>
    )
  }
}

export default App
