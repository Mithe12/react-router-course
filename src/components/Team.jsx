//useParam to get the /teams/:teamName 
// use the teamName to get the team information


import { useParams, Link, Navigate } from 'react-router-dom';
import useTeam from '../hooks/useTeam';
import TeamLogo from './TeamLogo';
import Loading from './Loading'

export default function Team() {
    const { teamName } = useParams();
    const { loading, response: team } = useTeam(teamName);
    let body;
    if (loading === true) {
        body = <Loading />
    } else if (team === null) {
        body = <Navigate to='/teams' />
    } else {
        body = <div style={{ width: '100%' }}>
            <TeamLogo id={team.id} className='center' />
            <h1 className='medium-header'>{team.name}</h1>
            <ul className='info-list row'>
                <li>Est.<div>{team.established}</div></li>
                <li>Manager<div>{team.manager}</div></li>
                <li>Coach<div>{team.coach}</div></li>
            </ul>
            <Link
                className='center btn-main'
                to={`/${teamName}`}>
                {team.name} Team Page
            </Link>
        </div>
    }

    return (
        <div className='panel'>
            {body}
        </div>);
}