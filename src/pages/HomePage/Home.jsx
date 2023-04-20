import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (<>
        <Link to='points'>Points</Link>
        <Link to='event'>Event</Link>
        <h2>Home</h2>
        <Outlet/>
    </>)
}

export default Home