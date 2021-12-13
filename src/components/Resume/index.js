import React from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import ResumePDF from '../../assets/files/Resume.pdf'

export default function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div>
        <h5>Front-End Skills</h5>
        <ol>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>version control/Git</li>
          <li>responsive design</li>
        </ol>
        <br></br>
        <h5>Back-End Skills</h5>
        <ol>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>Model View Controller (MVC)</li>
          <li>REST</li>
          <li>Progressive Web Applications (PWA)</li>
        </ol>
        <br></br>
        <h5>Dev Tool Skills</h5>
        <ol>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ol>
        <br></br>
        <h5>Database Skills</h5>
        <ol>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ol>
      </div>
      <div className="bottom-spacing">
        <Document className={'PDF'} file={ResumePDF}>
          <Page pageNumber={1} />
        </Document>
        <a href="../../assets/files/Resume.jpg" download='Resume.jpg'>
          <button type="button">Download my Resume</button>
        </a> 
      </div>
    </section>
  );
}