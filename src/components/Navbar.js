// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaMicrophone } from 'react-icons/fa';
// import { IoSettingsOutline } from 'react-icons/io5';
// import '../index.css';

// const Navbar = () => {
//   const urls = [
//     {
//       id: 1,
//       url: '/',
//       text: 'Home',
//     },
//     {
//       id: 2,
//       url: '/teams',
//       text: 'Teams',
//     },
//     {
//       id: 3,
//       url: '/standing',
//       text: 'Standing',
//     },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <img src="football1.png" className="football" alt="football" />
//         <h1 className="nav-head">The Football League</h1>
//       </div>
//       <ul className="nav-menu">
//         {urls.map((url) => (
//           <li className="nav-item" key={url.id}>
//             <NavLink to={url.url}>{url.text}</NavLink>
//           </li>
//         ))}
//       </ul>
//       <div className="nav-icons">
//         <FaMicrophone />
//         <IoSettingsOutline />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
