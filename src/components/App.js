
import React from 'react'
import Navbar from "../components/Navbar"
import FavoritedContainer from "../containers/FavoritedContainer"
import FeedContainer from "../containers/FeedContainer"
import FilteredContainer from "../containers/FilteredContainer"
import { BrowserRouter as Router, Route} from 'react-router-dom';

// function = () => {
//   this.setstate({
    
//   })
// }


class App extends React.Component {
 
 render() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={FeedContainer} />
      <Route exact path="/filtered" component={FilteredContainer} />
      <Route exact path="/favorites" component={FavoritedContainer} />
    </div>
  </Router>
  )
 
    
    // <div className="App">
      
    //   <h1>Animalgram in the works... 🚧👷🐈🐕‍🧱🏗🚧</h1>
    // </div>
  // );
  }
}
export default App;
