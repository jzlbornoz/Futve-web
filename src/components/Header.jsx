import React from 'react';
import '../styles/components/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <Link to='/'>
                <h2>FUTve info</h2>
            </Link>
            <ul className='Header-nav'>
                <Link to='/goalScorer'>
                    <li>GoalScorer</li>
                </Link>
                <Link to='/topAssists' >
                    <li>TopAssists</li>
                </Link>
            </ul>
        </div>
    )
}

export { Header }