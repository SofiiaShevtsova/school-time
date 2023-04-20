import { Navigate, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './pages/HomePage/Home';
import Start from './pages/StartPage/Start';

function App() {
   return (
      <>
         <Routes>
            <Route
               path="/"
               element={<Start />}
            />
            <Route
               path="/home"
               element={<Navigation />}
            >
               <Route
                  index
                  element={<Home />}
               />
               {/* <Route path="favorite" element={<Favorite />} />
          <Route path="list" element={<MyList />} /> */}
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
