import { Link } from 'react-router-dom';

const Start = () => {
   const user = "admin"
   return (
      <>
         <Link to={`/${user}`}>Home</Link>
         <h1 className="text-3xl font-bold underline">Hello world!</h1>
         <p>Буде форма для входу в кабінет і щось прикольне по стилях можливо ще ссилки на освітні сайти і законодавство про освіту</p>
      </>
   );
};

export default Start;
