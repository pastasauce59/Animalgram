import React from 'react'

class Comments extends React.Component {

    state = {
      comments: []
    }
  
  
  
   render() {
    return (
        <div>
        <form className="comment-form">
        <input type="text" className="comment-input" placeholder="leave a comment"></input>
        <button type="submit" className="submit-comment" >submit</button>
        </form>
        <ul>
            <li>

            </li>
        </ul>
   
        </div>
    
    )}
}  
  export default Comments;