import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/home/favorite">Favorite</Link>
        <Link to="/home/list">My list</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;