import React, { useContext } from 'react';
import { Team } from '../components/Team';
import { AppContext } from '../context/AppContext';
import { Loading } from '../components/Loading';
import '../styles/containers/home.css';

const Home = () => {
    const { loading } = useContext(AppContext);
    if (loading) {
        return <Loading />
    } else {
        return (
            <div className='Home'>
                <Team />
            </div>
        )
    }
}

export { Home };