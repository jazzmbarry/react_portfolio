import React from 'react';

export default function ProjectCard(props) {
    return(
        <article className=''>
        <div className="row project-card">
            <div className="column card-header">
                <div className="image-container">
                <a className='projectImage' href={props.deploy} target="_blank" rel="noreferrer">
                    <img href={props.deploy} src={props.image} width="100%" alt={props.title} key={props.title} />                    
                    {/* <h3 className='center'>{props.title}</h3>                     */}
                    </a>
                </div>
            </div>
            </div>
            <div className='row'>
            <ul>
                <li className='column'><b>GitHub:</b> <a className='gitRef' href={props.github_url}>{props.github}</a></li>
                <li className='column'><b>Description: </b>{props.description}</li>
                <li className='column'><b>Technologies/Tools: </b>{props.technologies}</li>
            </ul>
        </div>
        </article>
    );
}

