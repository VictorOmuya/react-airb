import Navbar from "./components/Navbar";
import Nero from "./components/Nero";
import Card from "./components/Card";
import player from "./images/player.JPG"
import data from "./data.js"


function App() {
  const items = data.map(function(item){
    return (
      <Card 
        // img ={item.imageUrl}
        //country = {item.location}
        //ratings = {item.stats.rating}
        //reviewCount = {item.stats.reviewCount}
        //title = {item.title}
        //price = {item.price}
        //openspot = {item.openspot}

        key = {item.id}
        item={item}
        />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Nero />
      <div className="app-card">
        {items}
      </div>
    </div>
  );
}

export default App;
