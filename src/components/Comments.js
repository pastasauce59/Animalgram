import React from 'react'




const Comments = (props) => {
  return(
    <ul className='comments'><strong>Comments:</strong>
    {props.post.comments.map((comment, index)=> <li key={index}> {comment} <p></p> </li>)}
    

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