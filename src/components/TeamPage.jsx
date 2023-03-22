import { useParams, Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import useTeam from '../hooks/useTeam';
import useTeamArticles from '../hooks/useTeamsArticles';
import TeamLogo from './TeamLogo';
import { slugify } from '../utils/index';
import Loading from './Loading'


/*
1. Import all the related hooks and logos
2. Create a hook that combines all the useHooks and check if you get all the data in the console and the paramter should be id
3. If loading is true return null if not show the datas.
4. 4 headers, Logo and size ---- View Roaster ---- Championship ---- Team Information -- Finally articles
*/

function useTeamPageData(teamId) {
    const { loading: loadingTeamNames, response: teamNames } = useTeamNames();
    const { loading: loadingTeam, response: team } = useTeam(teamId);
    const { loading: loadingTeamArticles, response: teamArticles } = useTeamArticles(teamId);

    return {
        teamNames,
        team,
        teamArticles,
        loading: loadingTeamNames || loadingTeam || loadingTeamArticles
    }
}

export default function TeamPage() {
    const { teamId } = useParams();
    const { teamNames, team, teamArticles, loading } = useTeamPageData(teamId);


    if (loading === true) return <Loading />;
    if (!teamNames.includes(teamId)) return <h1 className='text-center'> The Team is not a valid team</h1>
    return (
        <div className='panel'>
            <TeamLogo id={teamId} width='125px' />
            <h1 className='medium-header'>{team.name}</h1>
            <h4 style={{ margin: 5 }}>
                <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}> View Roaster </Link>
            </h4>
            <h4>Championship</h4>
            <ul className="championships">
                {team.championships.map((year) => (
                    <li key={year}>{year}</li>
                ))}
            </ul>
            <ul className="info-list row" style={{ width: '100%' }}>
                <li>Est. <div>{team.established}</div></li>
                <li>Manager <div>{team.manager}</div></li>
                <li>Coach <div>{team.coach}</div></li>
                <li>Record <div>{team.wins} - {team.losses}</div></li>
            </ul>

            <h2 className='header'>Articles</h2>
            <ul className='articles'>
                {teamArticles.map((article) => (
                    <li key={article.id}>
                        <h4 className='article-title'>
                            <Link to={`articles/${slugify(article.title)}`}> {article.title} </Link>
                        </h4>
                        <div className='article-date'>
                            {new Date(article.date).toLocaleDateString()}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}