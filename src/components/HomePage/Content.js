import React, { Component } from 'react';
import LearnIcon from './../_util/LearnIcon';

export class Content extends Component {
    render() {
        return (
            <div class="content">
        <section class="howto">
            <h1>HOW IT WORKS</h1>
            <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea.</p>
            <div class="container">
                <div class="helper" id="report">
                    <div class="body">
                        <h3>REPORT A CASE</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provid<br/>ent distinctio officia ducimus nulla. Obcaecati qui nostrum
                            n<br/>eque totam doloremque commodi.                        </p>
                    </div>
                    <a href="#" class="learn">LEARN MORE 
                        <LearnIcon />
                    </a>
                </div>
                <div class="helper" id="results">
                    <div class="body">
                        <h3>RESULTS GENERATED</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provid<br/>ent distinctio officia ducimus nulla. Obcaecati qui nostrum
                            n<br/>eque totam doloremque commodi.
                        </p>
                    </div>
                    <a href="#" class="learn">LEARN MORE
                        <LearnIcon />
                    </a>
                </div>
                <div class="helper" id="connect">
                    <div class="body">
                        <h3>CONNECTION OF PARTIES INVOLVED</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provid<br/>ent distinctio officia ducimus nulla. Obcaecati qui nostrum
                            n<br/>eque totam doloremque commodi.
                        </p>
                    </div>
                    <a href="#" class="learn">LEARN MORE
                        <LearnIcon />
                    </a>
                </div>
                <div class="helper" id="return">
                    <div class="body">
                        <h3>RETURN OF ITEM</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provid<br/>ent distinctio officia ducimus nulla. Obcaecati qui nostrum
                            n<br/>eque totam doloremque commodi.
                        </p>
                    </div>
                    <a href="#" class="learn">LEARN MORE
                        <LearnIcon />
                    </a>
                </div>
            </div>
        </section>
    </div>
        )
    }
}

export default Content
