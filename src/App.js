import { Navigate, Route, Routes } from 'react-router-dom';

import Event from './pages/EventPage/Event';
import Home from './pages/HomePage/Home';
import Messages from './pages/MessagesPage/Messages';
import Points from './pages/PointsPage/Points';
import Schedule from './pages/SchedulePage/Schedule';
import Start from './pages/StartPage/Start';
import Statistics from './pages/StatisticsPage/Statistics';

function App() {
   return (
      <>
         <Routes>
            <Route
               path="/"
               element={<Start />}
            />
            <Route
               path="/:userType"
               element={<Home />}
            >
               <Route
                  path="event"
                  element={<Event />}
               />
               <Route
                  path="messages"
                  element={<Messages />}
               />
               <Route
                  path="points"
                  element={<Points />}
               />
               <Route
                  path="schedule"
                  element={<Schedule />}
               />
               <Route
                  path="statistics"
                  element={<Statistics />}
               />
            </Route>
            <Route
               path="*"
               element={<Navigate to="/" />}
            />
         </Routes>
      </>
   );
}

export default App;
