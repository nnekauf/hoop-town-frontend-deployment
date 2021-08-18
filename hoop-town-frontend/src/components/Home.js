import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BootstrapCarousel from './BootstrapCarousel' 
import BasketballMatch from "../images/pexels-cottonbro-5275201.mp4"


const Home = ({ state, loggedIn }) => {

    return (
        <>
        {<BootstrapCarousel/>}

        <div className = "homePage">
            <text className="mainTitle"> Hoop Town</text> <br/>
            <text className= "secondTitle" > Street Ball <b>Reinvented</b> </text>
            <br/><br/><br/><br/><br/><br/>
            { loggedIn ?
                <>
                    <Link className = "homeButton"  to="/tournaments"> Find Tournaments</Link> 
                        <br/><br/>
                    {/* <Link className = "homeButton"  to="/tournament/saved"> My Saved Games</Link> */}
                    <br/><br/>
                </> 
                :
                <>
                    <Link className = "homeButton"  to="/signup">Sign Up</Link> 
                    <br/> <br/>
                    <Link className = "homeButton"  to="/login">Log In</Link>
                </>
            }

        </div>

        </>
    )


};
 
const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(Home)