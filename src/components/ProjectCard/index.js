import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard(props) {
    return(
        <div className="project-card">
            <div className="card-header">
                <a href={props.deploy} target="_blank" rel="noreferrer"><h3>{props.title} {props.deploy !== null && <FaExternalLinkAlt />}</h3></a>
                <div className="image-container">
                    <img src={props.image} width="100%" alt={props.title} key={props.title} />
                </div>
            </div>
            <ul>
                <li><b>GitHub:</b> <a href={props.github_url}>{props.github}</a></li>
                <li><b>Description: </b>{props.description}</li>
                <li><b>Technologies/Tools: </b>{props.technologies}</li>
            </ul>
        </div>
    );
}

