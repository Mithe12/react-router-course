/* 
1. UseTeamNames hook to get all the names and create a side bar and pass that to it 
2. Also define the Nested Router in the App components.
*/
import { Outlet } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import Sidebar from './Sidebar';
import Loading from './Loading'

export default function Teams() {
    const { loading, response: teams } = useTeamNames();

    if (loading === true) { return <Loading /> }

    return (
        <div className="container">
            <Sidebar title='Teams' list={teams} />
            <Outlet />
        </div>
    );
}