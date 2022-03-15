import React, { useContext } from 'react';
import { TeamCard } from './TeamCard';
import { Loading } from './Loading';
import { AppContext } from '../context/AppContext';
import '../styles/components/team.css';

const Team = () => {
    const { loading } = useContext(AppContext);
    if (loading) {
        return <Loading />
    } else {
        return <div className="Team"><TeamCard /></div>
    }
}

export { Team };