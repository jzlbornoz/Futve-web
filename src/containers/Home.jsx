import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
                <div className="Home-barra">
                </div>
                <div className="Home-information">
                    <h2>FutVe Data</h2>
                    <h3>Look data about currently tournament</h3>
                    <h5>Tournament 2022</h5>
                    <Link to='/Teams'>
                        <button type='button' className='Home-btn'>
                            <p>Teams</p>
                            <i className="fa-solid fa-right-long fa-xl" />
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export { Home };