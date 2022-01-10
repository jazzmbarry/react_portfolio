import React from 'react';

export default function ProjectCard(props) {
    return(
        <article className='row'>
        <div className="column project-card">
            <div className="card-header">
                <div className="image-container">
                <a className='projectImage' href={props.deploy} target="_blank" rel="noreferrer">
                    <img href={props.deploy} src={props.image} width="100%" alt={props.title} key={props.title} />                    
                    {/* <h3 className='center'>{props.title}</h3>                     */}
                    </a>
                </div>
            </div>
            </div>
            <div className='column'>
            <ul>
                <li className=''><b>GitHub:</b> <a className='gitRef' href={props.github_url}>{props.github}</a></li>
                <li className=''><b>Description: </b>{props.description}</li>
                <li className=''><b>Technologies/Tools: </b>{props.technologies}</li>
            </ul>
        </div>
        </article>
    );
}

