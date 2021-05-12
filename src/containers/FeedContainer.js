import React from 'react'
import Post from '../components/Post'
import CreatePostForm from "../components/CreatePostForm"

class FeedContainer extends React.Component{
    
    render() {
        // console.log(this.props.posts)
        return(
            <div>
                <CreatePostForm addPost={this.props.addPost} />
                <h1>Feed Container</h1>
                {this.props.posts.map(postObj => <Post favoritePet={this.props.favoritePet}  key={postObj.id} post={postObj}  deleteComment={this.props.deleteComment}  addComment={this.props.addComment} />)}
            </div>
        )
    }
}

export default FeedContainer