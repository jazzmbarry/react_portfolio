// used to conditionally render About, Portfolio, Contact and Resume
import React from 'react';

export default function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];

    return (
        <header>
        <nav className='row nav-wrapper'>
                        {tabs.map(tab => (
                                <a   
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                key={tab}
                            >
                                {tab}
                            </a>
                        ))}
        </nav>
        </header> 
    );
}
