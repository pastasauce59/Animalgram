// import React from 'react'

// const Comments = (props) => {
//   return(
//     <ul className='comments'><strong>Comments:</strong>
//       {props.post.comments.map((comment, key)=> 
//       <li key={comment.id}> {comment} 
//         <button onClick={(e)=>props.deleteComment(e, props.post, key)}>Delete</button> 
//       </li>)}
//     </ul>
//   )
// }

//   export default Comments;



import React from 'react'

class Comments extends React.Component {
  

  state = {
    comments :"",
    areYouSure: false,
}

firstClick = () => {
    this.setState({
        areYouSure: !this.state.areYouSure
    })
}    


  render(){
    return(
      <ul className='comments'><strong>Comments:</strong>
      {this.props.post.comments.map((comment, key)=> <li key={comment.id}> {comment} 
      <button onClick={(e)=>this.props.deleteComment(e, this.props.post, key)}>Delete</button> </li>)}
      </ul>
    )}
    }
  export default Comments