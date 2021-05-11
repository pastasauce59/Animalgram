import React from 'react'
import Post from '../components/Post'

export default class FavoritedContainer extends React.Component{
    
    render() {
        return(
            <div>
                <h1>Favorite Container</h1>
                {this.props.favoritedPosts.map(favoritePostObj => <Post post={favoritePostObj} />)}
            </div>
        )
    }
}

