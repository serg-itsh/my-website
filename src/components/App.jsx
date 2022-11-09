import React from 'react';

import Header from 'Pages/Heder/Header';
import Profile from 'Pages/Profile/Profile';
import Navbar from 'Pages/Navbar/Navbar';
// import Main from "Pages/Main/Main";

// import Footer from "Pages/Footer/Footer";

import './App.css';
import Footer from 'Pages/Footer/Footer';
import Dialogs from './Dialogs/Dialogs';
import { Routes,  Route } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import NotFound from 'Pages/NotFound/NotFound';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';

export const App = (props) => {
  return (
    
      <div className="app_wrapper">
        <Header />
        <Navbar />

        <div className="app_wrapper-content">
          
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialogs" element={<Dialogs/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="*" element={<NotFound/>} />
          
          </Routes>

          {/* <Dialogs/>
          <Profile/> */}
        </div>

        <Footer />
      </div>

  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
