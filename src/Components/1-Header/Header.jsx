import React from 'react'
import '@fortawesome/react-fontawesome';

import './Header.css'
export default function Header() {
  return <>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark mx-auto my-2 hero-nav">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Header</a>
        <a class="nav-link" href="#About">About</a>
        <a class="nav-link" href="#Skills">Skills</a>
        <a class="nav-link" href="#Projects">Projects</a>
        <a class="nav-link" href="#Resume">Resume</a>
        <a class="nav-link" href="#contact">Contact</a>
        <a class="nav-link" href="#footer">Footer</a>
      </div>
    </div>
  </div>
</nav>
<button className='btn btn-dark rounded-circle dark-btn'><i class="fa-solid fa-moon text-white"></i></button>
  </>
}
