import React from 'react';
import { useLocation, useSearchParams, Outlet } from 'react-router-dom';
import usePlayerNames from '../hooks/usePlayerNames';
import Sidebar from './Sidebar';
import Loading from './Loading'

/*
1. We have two scenarios, 
    + Team ---> player =  only players for that team will be visible
    + PLayers = all the players will be visible.

2. First, get the players by using usePlayers hook and teamId that you got from query string
3. We need sidebar where players need to be listed. 
    - Define the sidebar component: is collection of customLink - composable and reusable
    - map all the items and create customLink with to(slugify the name) and children info
4. CustomLink: we need to show bold and higlighted when the customLink is selected.

*/

export default function Players() {

    const location = useLocation();
    const [searchParams] = useSearchParams(location.search);
    const [teamId, setTeamId] = React.useState(searchParams.get('teamId'))

    React.useEffect(() => {
        if (location.search === '') {
            searchParams.delete('teamId')
            setTeamId(null)
        } else {
            setTeamId(searchParams.get('teamId'))
        }
    }, [location.search, searchParams])

    const { loading, response: players } = usePlayerNames(teamId);

    if (loading === true) return <Loading />

    return (
        <div className='container two-column'>
            <Sidebar title='Players' list={players} />
            <Outlet />
        </div>
    );
}