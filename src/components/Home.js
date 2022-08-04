import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch();
  }, [dispatch, leagues.length]);

  return (
    <div className="main-container">
      <p className="text">
        Total Available &nbsp; Leagues:
        {leagues.length}
      </p>
      <div className="logo-cont">
        <div className="league-logos">
          {leagues.map((league) => (
            <div key={league.id}>
              <img src={league.logo} alt={league.name} className="logo-img" />
            </div>
          ))}
        </div>
        <Link to="/Leagues">
          <BiRightArrowCircle className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
