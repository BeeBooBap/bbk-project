import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'white',
    display: 'inline'
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a style={navStyle} class="navbar-brand" href="#">Brand Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a style={navStyle} class="nav-link" href="#">Home<span class="sr-only"></span></a>
      </li>
      <li class="nav-item dropdown">
        <a style={navStyle} class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Case List
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a style={navStyle} class="dropdown-item" href="#">Property</a>
          <a style={navStyle} class="dropdown-item" href="#">Litigation</a>
          <div class="dropdown-divider"></div>
          <a style={navStyle} class="dropdown-item" href="#">Torts</a>
        </div>
      </li>
      <li class="nav-item">
        <a style={navStyle} class="nav-link disabled" href="#">Logout</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>

  );
}

export default Nav;