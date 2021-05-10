import React from "react"
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
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
            background: 'darkblue'
          }}
        >Home</NavLink>
        
        <NavLink
          to="/filtered"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Cats</NavLink>
        
        <NavLink
          to="/favorites"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Favorites</NavLink>
      </div>
       
     )
    }
}  
   export default Navbar;