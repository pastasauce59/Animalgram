import React from 'react'
import Post from '../components/Post'
import CreatePostForm from "../components/CreatePostForm"


class FeedContainer extends React.Component{
    
    render() {
        // console.log(this.props.posts)
        return(
            <div>
                <h1>~ Welcome To Animalgram! ~</h1>
                <CreatePostForm addPost={this.props.addPost} />
                <p></p>
                {/* <h1>~ Welcome To Animalgram! ~</h1> */}
                

                {this.props.posts.map(postObj => <Post key={postObj.id} post={postObj}
                 addComment={this.props.addComment} likePost={this.props.likePost}
                  deletePost={this.props.deletePost} favoritePet={this.props.favoritePet}
                  deleteComment={this.props.deleteComment} />)}
            </div>
        )
    }
}

export default FeedContainer