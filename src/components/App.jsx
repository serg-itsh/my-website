import Header from "Pages/Heder/Header";
import Main from "Pages/Main/Main";

import Footer from "Pages/Footer/Footer";

export const App = () => {
  return (
    <div className="app_wrapper">
      <Header/>
     
      My website
      <Main/>
      <Footer/>
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