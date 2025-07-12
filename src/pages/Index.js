import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description="Portfolio website of Praneeth Parthasarathy live now :)">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome</Link>
          </h2>
          <p>
            Turning data into smart, actionable insights for business growth.
          </p>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '2rem',
        }}
      >
        {/* Left: Text Content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p>
            Balancing data flows and nature scenes with one foot out in
            production, the other in the forest.
          </p>
          <p>
            Welcome to my portfolio. I’m a Data Engineer & BI Specialist with over 5 years of
            experience in building scalable ETL pipelines, automating workflows, and delivering
            insights through Power BI and Tableau dashboards.
          </p>
          <p>
            I’ve worked on high-volume financial data systems at GreenSky (USA) and currently help
            businesses make data-driven decisions at Appridat Solutions (India).
          </p>
          <p>
            You can learn more <Link to="/about">about me</Link>, view my{' '}
            <Link to="/resume">resume</Link>, check out my{' '}
            <Link to="/projects">projects</Link>, or <Link to="/contact">get in touch</Link>.
          </p>
          <p>
            {'LinkedIn profile available '}
            <a
              href="https://www.linkedin.com/in/praneethp97/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>

        {/* Right: Profile Image */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/images/praneeth-right.png"
            alt="Praneeth Parthasarathy"
            style={{
              width: '280px',
              borderRadius: '12px',
              objectFit: 'cover',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          />
        </div>
      </div>
    </article>
  </Main>
);

export default Index;
