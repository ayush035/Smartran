import React from 'react'
import UnstoppableDomain from './UnstoppableDomain'
export default function Navbar (){

    return(
        
        <nav className="navbar navbar-expand-lg bg-none">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><font color ='white' size="6" face ="arial">Smartran</font></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Upload"><font color ='white' size="4">Upload</font></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><font color ='white' size="4">My Gallery</font></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><font color ='white' size="4">
            Notifications</font>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><font color ='white' size="4">My Account</font></a>
        </li>
      </ul>
      <UnstoppableDomain/>
        <button className="btn btn-outline-light" type="submit">Login</button>
            
    </div>
  </div>
</nav>
        


    )
}