import { useState, useEffect, useRef } from 'react';
import initialState from '../initialState';

const useTeam = () => {

    const [team, setTeam] = useState([]);
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [killers, setKillers] = useState([]);
    const [searchK, setSearchk] = useState('');

    //Trae a los equipos del futve
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
    }, []);

    //Trae a los goleadores del futve
    useEffect(() => {
        fetch("https://v3.football.api-sports.io/players/topscorers?season=2022&league=299", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "43683b763faa690ba5fd98946c457877"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setKillers(data.response);
                if (data.response.length > 0) {
                    setLoading(false)
                } else {
                    setLoading(true)
                };
            })
    }, []);

    //Selecciona el equipo
    const addToSelect = payload => {
        setState({
            ...state,
            selectTeam: [payload]
        });
        console.log(state)
    };

    const addToKiller = payload => {
        setState({
            ...state,
            selectKiller: [payload]
        });
    };

    //Filtro de jugadores para el buscador
    const inputRef = useRef(null);

    const handleSearch = () => {
        setSearchk(inputRef.current.value);
    };

    const filteredKillers = killers.filter(filteredKiller => (
        filteredKiller.player.name.toLowerCase().includes(searchK.toLowerCase())
    ));

    return ({
        team,
        addToSelect,
        state,
        loading,
        killers,
        addToKiller,
        searchK,
        handleSearch,
        filteredKillers,
        inputRef,
    })
};

export { useTeam };

