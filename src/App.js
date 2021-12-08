import './App.css';
import React from "react";
import Card from "./Components/Card"
let data = require("./data.json")

function App() {

  const [ filter, setFilter ] = React.useState("")

  const searchText = (event) =>{
        setFilter(event.target.value)
  }

  let dataSearch = data.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
      )
  })

   return (
    <div className="App">
      <h1>Webshop</h1>
      <input type="text" placeholder="Search for products" value={filter} onChange={searchText.bind(this)}/>
      <div id="cards-container">
        {dataSearch.map(data => <Card className="cards" key={data.id} data={data} />)}
      </div>
    </div >
  );
}

export default App;