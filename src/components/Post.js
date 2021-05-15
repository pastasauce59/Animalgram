import React from 'react'
import Comments from "../components/Comments"
export default class Post extends React.Component{


    state = {
        comments :"",
    }

    



    render() {
        // console.log(this.props.post)
       return(
           <div className='animal-post'>
               
               <h3 className='caption'>{this.props.post.caption}</h3>
               <img src={this.props.post.image}></img>
                              
                 
                 <Comments post={this.props.post} deleteComment={this.props.deleteComment}/>
                     
               
               <h3 className='likes'>👍🏼: {this.props.post.likes}</h3>
               <button onClick={() => this.props.likePost(this.props.post)} >Ace Ventura Approved 👍🏼</button>
               
               <button  onClick={()=>this.props.favoritePet(!this.props.post.favorited, this.props.post,
                 this.props.post.favorited === null ? alert("Favorited!") : alert("Unfavorited :(") )}  >{
                  this.props.post.favorited === null ? "🤍" : "🧡"
                 }</button>
               
               <button onClick={() => this.props.deletePost(this.props.post)} >Unsatisfied? ❌</button>
            

               
               <form autoComplete="off" onSubmit={(e) => this.props.addComment(e, this.state.comments, this.props.post)} className="comment-form">
                
                
                <input onChange={(e)=> this.setState({comments: e.target.value})} type="text" name='comment' className="comment-input" placeholder="leave a comment"></input>
                
                <button type="submit" className="submit-comment" >submit</button>
                </form>


               
           </div>
       )
    }

}
