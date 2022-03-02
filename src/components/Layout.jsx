import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/components/layout.css'

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export { Layout }