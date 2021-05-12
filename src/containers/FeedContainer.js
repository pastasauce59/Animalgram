import React from 'react'
import Post from '../components/Post'
import CreatePostForm from "../components/CreatePostForm"

class FeedContainer extends React.Component{
    
    render() {
        // console.log(this.props.posts)
        return(
            <div>
                <CreatePostForm addPost={this.props.addPost} />
                <h1>~ Welcome to Animalgram! ~</h1>
                {this.props.posts.map(postObj => <Post key={postObj.id} post={postObj}
                 addComment={this.props.addComment} likePost={this.props.likePost} deletePost={this.props.deletePost} />)}
            </div>
        )
    }
}

export default FeedContainer