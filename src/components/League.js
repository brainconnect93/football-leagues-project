// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { BiRightArrowCircle } from 'react-icons/bi';
// import { Link } from 'react-router-dom';
// import { fetchLeagues } from '../redux/Home/home';
// import '../index.css';

// const Leagues = () => {
//   const leagues = useSelector((state) => state.leagues);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchLeagues());
//   }, [dispatch]);

//   return (
//     <>
//       <div className="grid-container">
//         <div>
//           <h2 className="heading-text">International leagues</h2>
//         </div>
//         <div className="leagues">
//           {leagues.map((league) => (
//             <div className="league" key={league.id}>
//               <Link
//                 key={league.id}
//                 to={`/${league.id}`}
//                 state={{ id: league.id }}
//               >
//                 <div className="league" key={league.id}>
//                   <div>
//                     <img
//                       src={league.logo}
//                       alt={league.name}
//                       className="image"
//                     />
//                   </div>
//                   <div className="upper-league">
//                     <BiRightArrowCircle
//                       className="league-btn"
//                       style={{
//                         width: '25px',
//                         height: '25px',
//                         color: '#fff',
//                         background: 'transparent',
//                       }}
//                     />
//                     <p className="league-name">{league.name}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Leagues;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';

const Leagues = ({ id, logo, name }) => (
  <>
    <div className="league-card">
      <Link key={id} to={`/${id}`} state={{ id }}>
        <img src={logo} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  </>
);

Leagues.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Leagues;
