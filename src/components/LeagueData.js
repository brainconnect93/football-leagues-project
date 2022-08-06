import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoChevronBackOutline, IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/Home/home';
import '../index.css';

const LeagueData = () => {
  const leagues = useSelector((state) => state.leagues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, [dispatch]);

  return (
    <>
      <div className="nav-bar1">
        <Link to="/">
          <IoChevronBackOutline className="curve" />
        </Link>
        <p>All Leagues</p>
        <div className="nav-icon">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
      </div>
      <div>
        <div className="league-data">
          <div className="total">
            Total teams:
            {leagues.length}
          </div>
          <div className="league-logos">
            {leagues.map((league) => (
              <div key={league.name}>
                <div>
                  <img
                    src={league.logo}
                    alt={league.name}
                    style={{ width: '35px', height: '35px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="head">All available leagues</div>
        <div>
          {leagues.map((league) => (
            <div key={league.name} className="club-cont">
              <div className="name-logo">
                <img src={league.logo} alt={league.name} />
                <p>{league.name}</p>
              </div>
              <div className="points-arrow">
                <BiRightArrowCircle />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeagueData;
