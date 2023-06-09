import { Navigate, Route, Routes } from 'react-router-dom';

import Add from './pages/AddPage/Add';
import Event from './pages/EventPage/Event';
import Home from './pages/HomePage/Home';
import Messages from './pages/MessagesPage/Messages';
import Points from './pages/PointsPage/Points';
import Schedule from './pages/SchedulePage/Schedule';
import Start from './pages/StartPage/Start';
import Statistics from './pages/StatisticsPage/Statistics';
import Navigation from './components/Navigation/Navigation';

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
               element={<Navigation />}
         >
                          <Route
                  index
                  element={<Home />}
               />
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
               <Route
                  path="add"
                  element={<Add />}
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
