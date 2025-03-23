import React from "react";
import {Link} from 'react-router-dom';
import bannerImg from "../images/hero.png"

export default function Header() {
  return (
    <header className="header">
      <section>
        {/* Banner Texts */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link to="/booking">
          <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>

        {/* Banner image */}
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
}