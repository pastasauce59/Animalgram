import React from "react"
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightcoral',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '12px'
  }


class Navbar extends React.Component {
 
    render() {
     return (
        <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'coral'
          }}
        >Home</NavLink>
        
        <NavLink
          to="/filtered"
          exact
          style={link}
          activeStyle={{
            background: 'coral'
          }}
        >Cats</NavLink>
        
        <NavLink
          to="/favorites"
          exact
          style={link}
          activeStyle={{
            background: 'coral'
          }}
        >Favorites</NavLink>
      </div>
       
     )
    }
}  
   export default Navbar;