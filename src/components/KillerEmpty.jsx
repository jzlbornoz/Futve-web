import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/killerEmpty.css'

const KillerEmpty = () => {
    return (
        <div className="KillerEmpty">
            <div className="KillerEmptyWrapped">
            <span>Select a Player</span>
            <Link to='/goalScorer'>
            <i className="fa-solid fa-circle-arrow-left fa-2xl" />
            </Link>
            </div>
        </div>
    )
}

export { KillerEmpty };