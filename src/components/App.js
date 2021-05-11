
import React from 'react'
import Navbar from "../components/Navbar"
import FavoritedContainer from "../containers/FavoritedContainer"
import FeedContainer from "../containers/FeedContainer"
import FilteredContainer from "../containers/FilteredContainer"

import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {

  state = {
    posts: [],
    comments: [],
    favorited: false
  }



  
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(postData => this.setState({posts: postData}))
  }

  addComment = (commentData) => {
    
    this.setState({
      comments: [...this.state.comments, commentData]
    })
  
}

  addPost = (postObj) => {
    debugger
    let newPost = {
      caption: postObj.caption,
      image: postObj.image,
      likes: 0,
      favorited: false,
      type: postObj.type,
      comments: []
    }
    this.setState({
      posts: [...this.state.posts, newPost]
    })



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
      <Navbar  />
      <br/>
      <Route exact path="/" component={ () => <FeedContainer  favoritePet={this.favoritePet}  addPost={this.addPost}  addComment={this.addComment} posts={this.state.posts} />} />
      <Route exact path="/filtered" component={ () => <FilteredContainer catPosts={catPosts} /> } />
      <Route exact path="/favorites" component={ () => <FavoritedContainer favoritedPosts={favoritedPosts} />} />
    </div>
  </Router>
  )
 
    
    
  }
}
export default App;
