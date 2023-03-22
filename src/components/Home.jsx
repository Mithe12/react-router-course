import TeamLogo from "./TeamLogo";
import useTeamNames from "../hooks/useTeamNames";
import { Link } from 'react-router-dom';
import Loading from './Loading'


export default function Home() {

    const { loading, response: teamNames } = useTeamNames();

    return (
        <div className="container">
            <h1 className='large-header'>Hash History Basketball League</h1>
            <h3 className='text-center header'>Select a team</h3>
            {loading === true ? <Loading /> :
                <div className='home-grid'>
                    {teamNames.map((teamId) => (
                        <Link key={teamId} to={`/${teamId}`}><TeamLogo id={teamId} width='120px' /></Link>
                    ))}
                </div>}
        </div>
    );
}