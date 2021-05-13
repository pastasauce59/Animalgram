import React from 'react'




const Comments = (props) => {
  return(
    <ul className='comments'><strong>Comments:</strong>
    {props.post.comments.map((comment, key)=> <li key={comment.id}> {comment} 
    <button onClick={(e)=>props.deleteComment(e, props.post, key)}>Delete</button> </li>)}
    

    </ul>
  )

  
}


// import React from 'react'

// class Comments extends React.Component {

    
  
  
  
//    render() {
//     return (
//         <div>
            
//         <ul>
//             <li>
//               {this.props.comment}
//             </li>
//         </ul>
   
//         </div>
    
//     )}
// }  
  export default Comments;