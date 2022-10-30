/* eslint-disable no-unused-expressions */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HostSignUp from "./HostSignUp";
import Volunteer from "./Volunteer";
import Nav from "./Nav";

function App() {
  const [events, setEvents] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/events', {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "mode": "no-cors"
      }
    })
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [])

  return (
    <>
      <MainPage />
      <BrowserRouter events={events}>
        <Nav />

        <div className='container'>
          <Routes>
            {/* <Route
              path="/"
              element={<HomePage />}
            /> */}
            <Route
              path="/host_signup"
              element={<HostSignUp />}
            />
            <Route
              path="/volunteer"
              element={<Volunteer />}
            />
          </Routes>


        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
