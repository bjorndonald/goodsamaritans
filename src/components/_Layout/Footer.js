import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container">
                    <div class="left">
                        <h2>Get Social</h2>
                        <p>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-linkedin"></i>
                            <i class="fab fa-youtube"></i>
                            <i class="fab fa-vimeo"></i>
                        </p>
                        <p><a>Terms of Service</a> | <a>Privacy Policy</a></p>
                        <p>© Copyright 2020 Protec . All rights reserved.</p>
                    </div>
                    <div class="right">
                        <h2>Subscribe for news updates</h2>
                        <p>
                            We would like to send you occasional news and updates. Click 'Sign up' below to join our mailing list. You can unsubscribe at any time.
                </p>
                        <a href="#" class="btn btn-primary"><span>Sign Up</span></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
