
import useTeamsArticles from '../hooks/useTeamsArticles';
import Sidebar from './Sidebar'
import { Outlet, useParams } from 'react-router-dom'
import Loading from './Loading'

export default function Articles() {
    const { teamId } = useParams()
    const { loading, response: articles } = useTeamsArticles(teamId);

    if (loading === true) return <Loading />
    return (
        <div className='container two-column'>
            <Sidebar
                title='Articles'
                list={articles.map((article) => article.title)}
            />
            <Outlet />
        </div>
    )
}