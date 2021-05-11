import React from 'react'
import Post from '../components/Post'

export default class FilteredContainer extends React.Component{
    
    render() {
        // console.log(this.props.catPosts)
        return(
            <div>
                <h1>Filtered Container</h1>
                {this.props.catPosts.map(postObj => <Post  favoritePet={this.props.favoritePet}  key={postObj.id} post={postObj} addComment={this.props.addComment} />)}
            </div>
        )
    }
}