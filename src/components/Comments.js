




const Comments = (props) => {
  return(
    <ul>
    {props.post.comments.map(comment=> <li> {comment}</li>)}


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