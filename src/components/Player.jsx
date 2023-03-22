/*
1. Define the nested routes in the Router for players/* 
2. we need to define outlet in the palyers class so that we can replace if there is some value
1. Create a player component
    - useParams to get the playerID 
    - based on the get the info and finally render it 
*/

import { useParams, Link, Navigate } from 'react-router-dom';
import usePlayer from '../hooks/usePlayer';
import Loading from './Loading'

export default function Player() {

    const { playerId } = useParams();
    const { loading, response: player } = usePlayer(playerId);

    let body;
    if (loading === true) {
        body = <Loading />
    } else if (player === null) {
        body = <Navigate to='/players' />
    } else {
        body = <div>
            <img className='avatar' src={`${player.avatar}`} alt={`${player.name}'s avatar`} />
            <h1 className='medium-header'>{player.name}</h1>
            <h3 className='header'>#{player.number}</h3>
            <div className='row'>
                <ul className='info-list' style={{ marginRight: 80 }}>
                    <li>Team
                        <div>
                            <Link to={`/${player.teamId}`}>
                                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                            </Link>
                        </div>
                    </li>
                    <li>Position<div>{player.position}</div></li>
                    <li>PPG<div>{player.ppg}</div></li>
                </ul>
                <ul className='info-list'>
                    <li>APG<div>{player.apg}</div></li>
                    <li>SPG<div>{player.spg}</div></li>
                    <li>RPG<div>{player.rpg}</div></li>
                </ul>
            </div>
        </div>
    }

    return (
        <div className='panel'>
            {body}
        </div>
    );


}