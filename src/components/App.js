
import React from 'react'
import Navbar from "../components/Navbar"
import FavoritedContainer from "../containers/FavoritedContainer"
import FeedContainer from "../containers/FeedContainer"
import FilteredContainer from "../containers/FilteredContainer"
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {

  state = {
    comments: []
  }



 render() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={() => <FeedContainer comments={this.state.comments} />} />
      <Route exact path="/filtered" component={FilteredContainer} />
      <Route exact path="/favorites" component={FavoritedContainer} />
    </div>
  </Router>
  )
 
    
    
  }
}
export default App;
