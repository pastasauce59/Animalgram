
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
  }



  deleteComment = (e, post, key) => {
    e.preventDefault()
    // debugger
      // this.setState({
      //   comments: [post.comments.splice(key, 1)]
      //   })
      // console.log(post.comments)
      
      post.comments.splice(key, 1)
      let reqObj = {}
      reqObj.headers = {'Content-Type': 'Application/json'}
      reqObj.method = 'PATCH'
      reqObj.body = JSON.stringify({
        comments: post.comments
    })
    
    fetch(`http://localhost:3000/posts/${post.id}?embed=comments/`, reqObj)
    .then((r) => r.json())
    .then((updatedCommentObj) => 
      this.setState({
      comments: this.state.comments.map(comment =>
        comment.id )
      }) 
    )}






  // sorted the data so newest posts at the top of feed
  componentDidMount() {
    fetch('http://localhost:3000/posts')
    .then(resp => resp.json())
    .then(postData => this.setState({posts: postData.sort((a,b) => b.id - a.id)}))
  }

  addComment = (e, comment, postObj) => {
    e.preventDefault()
    // console.log(postObj)

    let reqObj = {}
    reqObj.headers = {'Content-Type': 'Application/json'}
    reqObj.method = 'PATCH'
    reqObj.body = JSON.stringify({
      comments: [...postObj.comments, comment]
    })

    fetch(`http://localhost:3000/posts/${postObj.id}/`, reqObj)
    .then(resp => resp.json())
    .then(updatedPostObj => {
     let updatedPosts = this.state.posts.map(post => {
        if(post.id === updatedPostObj.id) return updatedPostObj
        else return post
      })
      this.setState({
      posts: updatedPosts
    })
  }
  )
    
  
  }
  favoritePet = (favoriteData, postObj) => {
    
    // console.log(favoriteData, postObj)  
    
  
        let reqObj = {}
        reqObj.headers = {'Content-Type': 'Application/json'}
        reqObj.method = 'PATCH'
        reqObj.body = JSON.stringify({
          favorited: favoriteData
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


 render() {
  //  console.log(this.state.posts)
  
  let catPosts = this.state.posts.filter(post => post.type === "cat")
  // console.log(catPosts)

  let favoritedPosts = this.state.posts.filter(post => post.favorited === true)
  // console.log(favoritedPosts)

  return (
    <Router>
    <div>
      <Navbar  />
      <br/>
      <Route exact path="/" component={ () => <FeedContainer  favoritePet={this.favoritePet}  favoritePet={this.favoritePet}  addPost={this.addPost}  addComment={this.addComment}  deleteComment={this.deleteComment}  posts={this.state.posts} />} />
      <Route exact path="/filtered" component={ () => <FilteredContainer  favoritePet={this.favoritePet}  catPosts={catPosts} addComment={this.addComment} /> } />
      <Route exact path="/favorites" component={ () => <FavoritedContainer favoritedPosts={favoritedPosts} addComment={this.addComment}/>} />
    </div>
  </Router>
  )
 
    
    
  }
}
export default App;
