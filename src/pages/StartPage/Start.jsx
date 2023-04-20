import { Link } from 'react-router-dom';

const Start = () => {
   const user = "admin"
   return (
      <>
         <Link to={`/${user}`}>Home</Link>
         <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </>
   );
};

export default Start;
