import React from 'react';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-section'>
            <Link to='/'>
                <h2>FutVeAnalytics</h2>
            </Link>
            <ul className='Header-nav'>
                <Link to='/goalScorer'>
                    <li>GoalScorer</li>
                </Link>
            </ul>
            </div>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Logotipo_de_la_Liga_FUTVE_utilizada_desde_la_temporada_2021.png" alt="Logo" width={70} />
                </div>
        </div>
    )
}

export { Header }