import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
            <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#fff"}}>
            <div class="container p-1">
              <Link class="navbar-brand mx-5" to="/">
                <img src='media\image\logo.png' style={{width:"30%"}}/>
              </Link>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" role="search">
                  <ul class="navbar-nav mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/product">Products</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active " aria-current="page" to="/support">Support</Link>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </nav>
     );
}

export default Navbar;