import { useLocation, Link } from 'react-router-dom';
import { slugify } from '../utils/index';

export default function Sidebar({ title, list }) {
    return (
        <div>
            <h3 className="header">{title}</h3>
            <ul className="sidebar-list">
                {list.map((item) => (
                    <CustomLink key={item} to={`${slugify(item)}`} > {item.toUpperCase()}</CustomLink>
                ))}
            </ul>
        </div >)
}

function CustomLink({ to, children }) {
    const location = useLocation();
    const split = location.pathname.split('/')
    const match = split[split.length - 1] === to

    const styles = match === true ? { fontWeight: 900, color: 'var(--white)' } : {}
    console.log({ match })

    return (
        <li>
            <Link style={{ ...styles }} to={{ pathname: to, search: location.search }} >{children}</Link>
        </li>
    );
}