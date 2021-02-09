import React, { Component } from 'react'
import SearchBox from './component/search-box/search-box-component'
import Cardlist from './component/card-list/card-list-component'
export class App extends Component {
  constructor(){
    super()

    this.state={
      monster:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({ monster:users}))
  }
  render() {
    const {monster,searchfield}=this.state
 const filtered=monster.filter(item=>item.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div>
       
        <SearchBox  handlechange={e=>this.setState({searchfield:e.target.value})}/>
        <Cardlist monster={filtered}/>
      
      </div>
    )
  }
}

export default App
