import React, { Component } from 'react';
import MouseIcon from './../_util/MouseIcon';

export class Header extends Component {
    render() {
        return (
            <header>
        <div class="overlay">
            <div class="container">
                <div class="heading">
                    <h1>
                        This is a lost and found reporting service
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis quia consectetur dolorem iste? Expedita odio
                        temporibus quos possimus, itaque voluptas obcaecati harum ab laboriosam et, perspiciatis veritatis
                        asperiores ducimus.
                    </p>
                    <p>
                        <a href="#" class="btn btn-primary"><span>Lost Something?</span></a>
                        <a href="#" class="btn btn-primary"><span>Report Found Item</span></a>
                    </p>
                </div>
                <div class="mouse-btn">
                    <MouseIcon />
                    <span>Scroll down</span>
                </div>
            </div>
        </div>
    </header>
        )
    }
}

export default Header
