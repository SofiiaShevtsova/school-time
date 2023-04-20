import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (<>
        <Link to='points'>Points</Link>
        <Link to='event'>Event</Link>
        <h2>Home</h2>
        <p>Особистий кабінет користувача. лінки на весь функціонал зроблю як обгортку а це буде як маршрут за індексом </p>
        <Outlet/>
    </>)
}

export default Home