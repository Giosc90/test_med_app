import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ProfileCard from "../ProfileCard/ProfileCard";



const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
       

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
        useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        const token = sessionStorage.getItem("auth-token");

        if (token && storedEmail) {
            const extractedName = storedEmail.split('@')[0]; // get part before @
            setUsername(extractedName);
            setIsLoggedIn(true);
        }
        }, []);
        
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
        StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/finddoctor">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/instant-consultation">Instant Consultation</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
         <Link to="/review">Reviews</Link>
        </li>
        {isLoggedIn?(
          
          <>
            <li 
            // onClick={handleDropdown}
            className="link profile-dropdown">
              <h4 style={{marginLeft: "20px"}}
              onClick={()=>setShowDropdown(!showDropdown)}
              
              >Welcome {username} </h4>
              {showDropdown && <ProfileCard setShowDropdown={setShowDropdown}/>  
              }
            </li>
            
            <li className="link" >
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
