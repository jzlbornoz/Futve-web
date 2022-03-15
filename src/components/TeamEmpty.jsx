import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/teamEmpty.css'

const TeamEmpty = () => {
    return (
        <div className="TeamEmpty">
            <div className="TeamEmptyWrapped">
            <span>Select a team/player</span>
            <Link to='/teams'>
            <i className="fa-solid fa-circle-arrow-left fa-2xl" />
            </Link>
            </div>
        </div>
    )
}

export { TeamEmpty };