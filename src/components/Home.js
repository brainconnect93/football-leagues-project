import React, { useEffect } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/Home/home';
import Leagues from './League';
import '../index.css';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (leagues.length === 0) {
      dispatch(fetchLeagues());
    }
  }, []);

  const [search, setSearch] = useSearchParams();

  return (
    <>
      <div className="nav-bar">
        <div className="nav-container">
          <img src="football1.png" className="football" alt="football" />
          <h1 className="nav-head">The Football League</h1>
        </div>
        <div className="nav-icon">
          <FaMicrophone />
          <IoSettingsOutline />
        </div>
        <div className="nav-img">
          <img src="Passport.jpg" className="img" alt="My-img" />
        </div>
      </div>
      <div className="main-container">
        <input
          className="searchbar"
          type="text"
          value={search.get('filter') || ''}
          placeholder="Enter league name.."
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
        <p className="text">
          Total Available &nbsp; Leagues:
          {leagues.length}
        </p>
        <div className="logo-cont">
          <div className="leagues-logos">
            {leagues.map((league) => (
              <div key={league.id}>
                <img src={league.logo} alt={league.name} className="logo-img" />
              </div>
            ))}
          </div>
          <Link to="/Leagues">
            <BiRightArrowCircle className="main-icon" />
          </Link>
        </div>
      </div>
      <div className="leagues-container">
        {leagues
          .filter((element) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const leagueName = element.name.toLowerCase();
            return leagueName.startsWith(filter.toLowerCase());
          })
          .map((element) => (
            <>
              <Leagues
                id={element.id}
                name={element.name}
                logo={element.logo}
                key={element.id}
              />
            </>
          ))}
      </div>
      <Leagues />
    </>
  );
};

export default HomePage;
