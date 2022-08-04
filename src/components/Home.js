// /* eslint-disable */
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaMicrophone } from 'react-icons/fa';
// import { IoSettingsOutline } from 'react-icons/io5';
// import '../index.css';
// // import { BiRightArrowCircle } from 'react-icons/bi';

// const HomePage = () => {
//   const leagues = useSelector((state) => state.leagues);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!leagues.length) dispatch();
//   }, [dispatch, leagues.length]);
//   return (

//     <div className="navbar">
//       <div className="nav-container">
//         <img src="football1.png" className="football" alt="football" />
//         <h1 className="nav-head">The Football League</h1>
//       </div>
//       <div className="nav-icons">
//         <FaMicrophone />
//         <IoSettingsOutline />
//       </div>
//     </div>
//     <div className="main-container">
//       <p className="text">
//         Total Available &nbsp; Leagues:
//         {leagues.length}
//       </p>
//       <div className="logo-cont">
//         <div className="league-logos">
//           {leagues.map((league) => (
//             <div key={league.id}>
//               <img src={league.logo} alt={league.name} className="logo-img" />
//             </div>
//           ))}
//         </div>
//         {/* <Link to="/Leagues">
//           <BiRightArrowCircle className="arrow-icon" />
//         </Link> */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { fetchLeagues } from '../redux/Home/home';
import Leagues from './League';
import '../index.css';

const HomePage = () => {
  const leagues = useSelector((state) => state.leagues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!leagues.length) dispatch(fetchLeagues());
  }, [dispatch, leagues.length]);

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
            <BiRightArrowCircle className="main-icon" />
          </Link>
        </div>
      </div>
      <Leagues />
    </>
  );
};

export default HomePage;
