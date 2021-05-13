import React from 'react'
import Post from '../components/Post'

export default class FavoritedContainer extends React.Component{
    
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

