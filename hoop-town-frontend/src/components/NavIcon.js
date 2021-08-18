import React, {useState } from 'react';
import { connect } from 'react-redux'
import icon from "../images/navbar_icon.png"
import NavBar from "./NavBar"



const NavIcon = () => {


const [show, setShow] = useState(false);
    const handleClick = () => {
      
      setShow(!show)
      }

      
            return(
                <div className="navBarIcon" onClick={handleClick} >
                <img id = "icon" src={icon} />
                { show ? <NavBar /> : null }
                </div>
            );         
      

}


// const mapStateToProps = state => {
//     return {
//       show: state.show,
      
      
//     }
//   }
  
  
  export default ( NavIcon)
