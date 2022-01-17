import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zhifan (Tom) Li</h2>
        <p><a href="mailto:zhifanli2000@gmail.com">zhifanli2000@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>Hi, I am Zhifan (Tom) Li,
        I am a <a href="https://www.ucalgary.ca/future-students/undergraduate/explore-programs/software-engineering">Software Engineering Student at Univeristy of Calgary. </a>
        Currently I am a Software Engineer Intern at <a href="https://www.tcenergy.com/">TC Energy</a>. Before TC Energy I was
        Project Lead at AI Shading, a tech start-up company.
        My goal is to leverage technology to create a lasting impact.
        I am a passionate worker and have always been committed to lifelong
        learning and continuous improvement.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zhifan (Tom) Li <Link to="/">#####zhifanli.com#####</Link>.</p>
    </section>
  </section>
);

export default SideBar;
