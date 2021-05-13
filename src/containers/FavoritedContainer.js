import React from 'react'
import Post from '../components/Post'

export default class FavoritedContainer extends React.Component{

    
    
    
    
    
    handleSubmit = (e, transactionData) => {
        e.preventDefault()
        
        let favoritedPost = {
          caption: postData.caption,
          image: postData.image,
          likes: postData.likes,
          favorited: postData.favorited,
          type: postData.type,
          comments:[postData.comments],
          id: postData.id
        }
        
        fetch("http://localhost:6001/transactions/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        })
          .then((r) => r.json())
          .then((newTransactionObj) => 
          this.setState({
            transactions: [...this.state.transactions, newTransactionObj]
          })
          )
      
      }













    render() {
        return(
            <div>
                <h1>~ All your favorites right where you want them ~</h1>
                {this.props.favoritedPosts.map(favoritePostObj => <Post key={favoritePostObj.id}
                 post={favoritePostObj} addComment={this.props.addComment}
                  likePost={this.props.likePost} favoritePet={this.props.favoritePet}
                   deletePost={this.props.deletePost} deleteComment={this.props.deleteComment} />)}
            </div>
        )
    }
}

