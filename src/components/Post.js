import React from 'react'
import Comments from "../components/Comments"
export default class Post extends React.Component{


    state = {
        comments :"",
    }

    



    render() {
        // console.log(this.props.post)
       return(
           <div>
               
               <h3>{this.props.post.caption}</h3>
               <img alt="" src={this.props.post.image}></img>
                              
                 
                 <Comments  deleteComment={this.props.deleteComment}  post={this.props.post}/>
                     
               
               <h3>👍🏼: {this.props.post.likes}</h3>
               <button>Ace Ventura Approved 👍🏼</button>
               <button onClick={()=>this.props.favoritePet(!this.props.post.favorited, this.props.post)}  > Favorite 💛</button>
            

               {/* COMMENT FORM */}
               <form autoComplete="off" onSubmit={(e) => this.props.addComment(e, this.state.comments, this.props.post)} className="comment-form">
                    <input onChange={(e)=> this.setState({comments: e.target.value})} 
                    type="text" name='comment' className="comment-input" placeholder="leave a comment"></input>
                    <button type="submit" className="submit-comment" >submit</button>
              </form>


               
           </div>
       )
    }

}
