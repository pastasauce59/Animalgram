import React from 'react'
import Comments from "../components/Comments"
export default class Post extends React.Component{


    state = {
        comments :"",
        favorited: false
    }

    // handleComment = (e) => {
    //     e.preventDefault()
        
    //     this.state.comments
    
    // }

    favoritePet = () => {
        this.setState({
          favorited: !this.state.favorited
        })
      }

    



    render() {
        // console.log(this.props.post)
       return(
           <div className='animal-post'>
               
               <h3 className='caption'>{this.props.post.caption}</h3>
               <img src={this.props.post.image}></img>
                              
                 
                 <Comments post={this.props.post}/>
                     
               
               <h3 className='likes'>👍🏼: {this.props.post.likes}</h3>
               <button onClick={() => this.props.likePost(this.props.post)} >Ace Ventura Approved 👍🏼</button>
               <button  onClick={()=>this.favoritePet()}  > Favorite 💛</button>
               <button onClick={() => this.props.deletePost(this.props.post)} >Unsatisfied? ❌</button>
            

               
               <form onSubmit={() => this.props.addComment(this.state.comments, this.props.post)} className="comment-form">
                
                {/* <input onChange={(e)=> this.handleComment(e)} value={this.state.comments} type="text" className="comment-input" placeholder="leave a comment"></input> */}
                <input onChange={(e)=> this.setState({comments: e.target.value})} type="text" name='comment' className="comment-input" placeholder="leave a comment"></input>
                
                <button type="submit" className="submit-comment" >submit</button>
                </form>

                {/* {this.props.post.comments.map(comment =><Comments/>)} */}
               
           </div>
       )
    }

}
