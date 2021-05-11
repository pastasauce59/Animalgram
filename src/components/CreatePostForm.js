import React from 'react'

class CreatePostForm extends React.Component{
    
    state = {
        caption: "",
        image: "",
        type:"",
        
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // console.log(this.props.posts)
        return(
            <div>
               <form onSubmit={()=> this.props.addPost(this.state)}>
                   <input type="text" placeholder="Caption goes here" name="caption" 
                   value={this.state.caption}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <input type="text" placeholder="Animal Image" name="image"
                   value={this.state.image}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <input type="text" placeholder="Animal Type" name="type" 
                   value={this.state.type}
                   onChange={(e)=>this.handleSubmit(e)}
                   ></input>
                   <button type="submit" className="submit-comment" >submit</button>
               </form>
            </div>
        )
    }
}

export default CreatePostForm