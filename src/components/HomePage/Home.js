import React, { Component } from 'react';
import './../../scss/style1.scss';
import NavMain from './../_Layout/NavMain';
import Footer from './../_Layout/Footer';
import Content from './Content';
import Header from './Header';

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <div class="underlyer">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div id="particles-js"></div>
                <NavMain />
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Home
