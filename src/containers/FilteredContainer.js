import React from 'react'
import Post from '../components/Post'

export default class FilteredContainer extends React.Component{
    
    render() {
        // console.log(this.props.catPosts)
        return(
            <div>
                <h1>~ You wanted only cat pictures you say? 🐈 ~</h1>
                {this.props.catPosts.map(postObj => <Post key={postObj.id} post={postObj}
                 addComment={this.props.addComment} likePost={this.props.likePost}
                  favoritePet={this.props.favoritePet} deletePost={this.props.deletePost} />)}
            </div>
        )
    }
}