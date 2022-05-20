import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
    return (
        <section className="Footer">
            <div className="Footer-wrapper">
                <div className="Footer-social">
                    <a href="https://www.instagram.com/jzlbornoz/">
                        <i className="fa-brands fa-instagram fa-2xl" />
                    </a>
                </div>
                <div className="Footer-term">
                    <p>Term of use - Privacy Policy</p>
                </div>
                <section className="Footer-git">
                    <a href="https://github.com/jzlbornoz">
                        <i className="fa-brands fa-github" />
                        <p>jzlbornoz</p>
                    </a>
                </section>
            </div>
        </section>
    )
}

export { Footer }