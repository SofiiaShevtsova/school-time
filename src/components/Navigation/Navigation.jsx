import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
   const user = 'admin';
   return (
      <>
         <nav>
            <Link to={`/${user}`}>Home</Link>
            <Link to="event">Event</Link>
            <Link to="points">Points</Link>
            <Link to="messages">Messages</Link>
            <Link to="schedule">Schedule</Link>
            <Link to="statistics">Statistics</Link>
            <Link to="add">Add</Link>
         </nav>
         <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
         </Suspense>
      </>
   );
};

export default Navigation;
