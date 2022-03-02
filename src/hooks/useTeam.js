import React, { useState, useEffect } from 'react'
import initialState from '../initialState';

const useTeam = () => {

    const [team, setTeam] = useState([]);
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://v3.football.api-sports.io/teams?country=Venezuela&league=299&season=2022", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "43683b763faa690ba5fd98946c457877"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setTeam(data.response);
                setLoading(false);
            })
    }, [])

    const addToSelect = payload => {
        setState({
            ...state,
            select: [payload]
        });
        console.log(state)
    };

    return ({
        team,
        addToSelect,
        state,
        loading
    })
};

export { useTeam };

