import React, { Component } from 'react';
import HomeIcon from './../_util/HomeIcon';
import ResultsIcon from './../_util/ResultsIcon';
import ContactIcon from './../_util/ContactIcon';

export class NavMain extends Component {
    render() {
        return (
            <nav>
        <div class="container">
            <div class="logo">
                <img src="./goodSamaritanWhiteFull.png" alt=""/>
            </div>
            <ul>
                <li>
                    <span>
                        <HomeIcon />
                    </span>
                    <a href="#">Home
                    </a>
                </li>
                <li>
                    <span>
                        <ResultsIcon />
                    </span>
                    <a href="">Results</a>
                </li>
                <li>
                    <span>
                        <ContactIcon />
                    </span>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <span>
                        
                    </span>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>
        )
    }
}

export default NavMain
