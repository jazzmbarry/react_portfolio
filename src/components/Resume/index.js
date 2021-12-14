import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import ResumePDF from '../../assets/files/Resume.pdf'

export default function Resume() {
  return (
<section>
  <div className='row'>
    <h2 className='column sectionHeader'>
      Resume
    </h2>
  </div>
  <div className="row">
    <div className="column">
      <h5>Front-End Skills</h5>
      <ul>
        <li>HTML5/CSS3</li>
        <li>JavaScript/JQuery</li>
        <li>Bootstrap/Milligram</li>
        <li>React</li>
        <li>Version Control/Git</li>
        <li>Responsive Design</li>
      </ul>
    </div>
    <div className="column">
      <h5>Back-End Skills</h5>
      <ul>
        <li>APIs</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Model View Controller (MVC)</li>
        <li>REST</li>
        <li>Progressive Web Applications (PWA)</li>
      </ul>
    </div>
  </div>
  <div className="row">
    <div className="column">
      <h5>Dev Tool Skills</h5>
      <ul>
        <li>Git</li>
        <li>npm</li>
        <li>npx</li>
        <li>Jest</li>
        <li>Webpack</li>
      </ul>
    </div>
    <div className="column">
      <h5>Database Skills</h5>
      <ul>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
      </div>
    </div>
  <div className="row bottom-spacing">
    <Document className={'PDF'} file={ResumePDF}>
      <Page pageNumber={1} />
    </Document>
  </div>
  <div className="row">
    <a href="../../assets/files/Resume.jpg" download='Resume.jpg'>
      <button type="button">Download my Resume</button>
    </a> 
  </div>
</section>
);
}