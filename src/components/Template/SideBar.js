import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me2.png`} alt="Profile" />
      </Link>
      <header>
        <h2>Praneeth Parthasarathy</h2>
        <p>
          <a href="mailto:praneethatwork@gmail.com">praneethatwork@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I’m Praneeth — a Data Engineer & BI Specialist with 5+ years of experience transforming
        raw data into smart, actionable insights. I’ve worked on high-volume financial systems,
        built scalable ETL pipelines, and created dashboards that drive business decisions.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>
    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Praneeth Parthasarathy <Link to="/">praneeth.dev</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
