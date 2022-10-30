/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
// import HostSignUp from "./HostSignUp";
// import Volunteer from "./Volunteer";
// import Nav from "./Nav";
import Events from './Events';

function App() {
  const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    fetch('http://18.207.93.240/events', {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "mode": "no-cors"
      }
    })
      .then((res) => res.json())
      .then((data) => setEvents(data));
      // .then((data) => console.log(data))
  }, [])

  return (
    <>
      <MainPage />
      {/* {console.log(events)} */}

      {events !== null && events.map(function (item, i) {
       return( <Events item={item} />)
      })}


      {/* <Nav /> */}

      {/* <div className='container'>
          <Routes>
            <Route
              path="/host_signup"
              element={<HostSignUp />}
            />
            <Route
              path="/volunteer"
              element={<Volunteer />}
            />
          </Routes>


        </div> */}
    </>
  );
}

export default App;
