import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useArticle from '../hooks/useArticle';
import Loading from './Loading'

export default function Article() {
    const { teamId, articleId } = useParams();
    const { loading, response: article } = useArticle({ teamId, articleId })
    let body;
    if (loading === true) {
        body = <Loading />
    } else if (article === null) {
        body = <Navigate to={`${teamId}/articles`} />
    } else {
        body = (<React.Fragment>
            <article className='article'>
                <h1 className='header'>{article.title}</h1>
                <p>{article.body}</p>
            </article>
        </React.Fragment>)
    }
    return (
        <div>
            <div className='panel'>
                {body}
            </div>
        </div>);
}