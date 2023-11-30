import React from 'react'
import { Link } from 'react-router-dom'
// import Button from './Button'
import '../Styles/Navbar.css'
import $ from 'jquery'
export default function Navbar(props) {
  $('li').click(function(){
    
    
    $(this).addClass('active').siblings().removeClass('active');
    
});
  return (
    <>
    <nav className='nav'>
        <ul className="nav flex-column">
  <li className="nav-item " style={{width:"158%"}}>
  <Link className="nav-link" to="/">Home</Link>
  </li>
  <li className="nav-item " style={{width:"158%"}}>
  <Link className="nav-link" to="/today">Today's Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"158%"}}>
  <Link className="nav-link " to="/all">All Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"158%"}}>
  <Link className="nav-link " to="/important">Important Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"158%"}}>
  <Link className="nav-link " to="/completed">Completed Tasks</Link>
  </li>
  <li className="nav-item" style={{width:"145%"}}>
  <Link className="nav-link" to="/incomplete">Incomplete Tasks</Link>
  </li>
</ul>
    </nav>

    </>
  )
}
