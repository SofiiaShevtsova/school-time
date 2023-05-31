import { Link } from 'react-router-dom';
import Login from '../../components/Login/LoginForm';

const Start = () => {
   const user = 'admin';
   return (
      <>
         <Link to={`/${user}`}>Home</Link>
         <Login/>
         <p>
            Буде форма для входу в кабінет і щось прикольне по стилях можливо ще
            ссилки на освітні сайти і законодавство про освіту
         </p>
      </>
   );
};

export default Start;
