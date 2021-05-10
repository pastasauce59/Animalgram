import React from 'react'

export default class Post extends React.Component{

    render() {
        // console.log(this.props.post)
       return(
           <div>
               <h3>{this.props.post.caption}</h3>
               <img src={this.props.post.image}></img>
               <h3>👍🏼: {this.props.post.likes}</h3>
               <button>Ace Ventura Approved 👍🏼</button>
               <button> Favorite 💛</button>

               
           </div>
       )
    }

}