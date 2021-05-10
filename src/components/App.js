
import React from 'react'
import Navbar from "../components/Navbar"
import FavoritedContainer from "../containers/FavoritedContainer"
import FeedContainer from "../containers/FeedContainer"
import FilteredContainer from "../containers/FilteredContainer"
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {

  state = {
    posts: []
  }
  
  
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(postData => this.setState({posts: postData}))
  }




 
 render() {
  //  console.log(this.state.posts)
  
  let catPosts = this.state.posts.filter(post => post.type === "cat")
  // console.log(catPosts)

  let favoritedPosts = this.state.posts.filter(post => post.favorited === true)
  console.log(favoritedPosts)

  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={ () => <FeedContainer posts={this.state.posts} />} />
      <Route exact path="/filtered" component={ () => <FilteredContainer catPosts={catPosts} /> } />
      <Route exact path="/favorites" component={ () => <FavoritedContainer favoritedPosts={favoritedPosts} />} />
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
