
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



  // sorted the data so newest posts at the top of feed
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(postData => this.setState({posts: postData.sort((a,b) => b.id - a.id)}))
  }

  addComment = (comment, postObj) => {
    
    console.log(postObj)

    let reqObj = {}
    reqObj.headers = {'Content-Type': 'Application/json'}
    reqObj.method = 'PATCH'
    reqObj.body = JSON.stringify({
      comments: [...postObj.comments, comment]
    })

    fetch(`http://localhost:3000/posts/${postObj.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedPostObj => this.setState({
      posts: this.state.posts.map(post => {
        if(post.id === updatedPostObj.id) return updatedPostObj
        else return post
      })
    }))
    
  
  }

  addPost = (postObj) => {
    // debugger
    let newPost = {
      caption: postObj.caption,
      image: postObj.image,
      likes: 0,
      favorited: false,
      type: postObj.type,
      comments: []
    }
    // this.setState({
    //   posts: [newPost, ...this.state.posts]
    // })

  let reqObj = {}
  reqObj.headers = {'Content-Type': 'Application/json'}
  reqObj.method = 'POST'
  reqObj.body = JSON.stringify(newPost)
 
    
  fetch('http://localhost:3000/posts', reqObj)
  .then(resp => resp.json())
  .then(newPostObj => {
    this.setState({posts: [newPostObj, ...this.state.posts]})
    })
  }

  likePost = (postObj) => {
    console.log(postObj.likes+1)

    let reqObj = {}
    reqObj.headers = {"Content-Type":"Application/json"}
    reqObj.method = 'PATCH'
    reqObj.body = JSON.stringify({
      likes: postObj.likes+1
    })

    fetch(`http://localhost:3000/posts/${postObj.id}`, reqObj)
    .then(resp => resp.json())
    .then(updatedPostObj => this.setState({
      posts: this.state.posts.map(post => {
        if(post.id === updatedPostObj.id) return updatedPostObj
        else return post
      })
    }))

  }

  deletePost = (postObj) => {
    let newPosts = this.state.posts.filter(post => post.id !== postObj.id)
    // this.setState({posts: newPosts})

    fetch(`http://localhost:3000/posts/${postObj.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(() => this.setState({posts: newPosts}))
  }



 render() {
   console.log(this.state.posts)
  
  let catPosts = this.state.posts.filter(post => post.type === "cat")
  // console.log(catPosts)

  let favoritedPosts = this.state.posts.filter(post => post.favorited === true)
  // console.log(favoritedPosts)

  return (
    <Router>
    <div>
      <Navbar  />
      <br/>
      <Route exact path="/" component={ () => <FeedContainer  favoritePet={this.favoritePet}  addPost={this.addPost}
        addComment={this.addComment} posts={this.state.posts} likePost={this.likePost} deletePost={this.deletePost} />} />
      
      <Route exact path="/filtered" component={ () => <FilteredContainer catPosts={catPosts}
       addComment={this.addComment} likePost={this.likePost} /> } />
      
      <Route exact path="/favorites" component={ () => <FavoritedContainer favoritedPosts={favoritedPosts}
       addComment={this.addComment} likePost={this.likePost} />} />
    </div>
  </Router>
  )
 
    
    
  }
}
export default App;
