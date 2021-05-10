import React from 'react'
import Post from '../components/Post'

export default class FeedContainer extends React.Component{
    
    render() {
        // console.log(this.props.posts)
        return(
            <div>
                <h1>Feed Container</h1>
                {this.props.posts.map(postObj => <Post post={postObj} />)}
            </div>
        )
    }
}