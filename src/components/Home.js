import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
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
              <img src={league.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
