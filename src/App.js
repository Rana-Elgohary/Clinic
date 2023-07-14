import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';
import DoctorDetails from "./Pages/DoctorDetails";
import SignIn from "./Pages/SignIn";
import Appointments from "./Pages/Appointments";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
            <Route path="/" element={
              <>
              <Home></Home>
              </>
            }></Route>
            <Route path="/home" element={
              <>
              <Home></Home>
              </>
            }></Route>
            <Route path="/doctordetails" element={
              <>
              <DoctorDetails></DoctorDetails>
              </>
            }></Route>
            <Route path="/signin" element={
              <>
              <SignIn></SignIn>
              </>
            }></Route>
            <Route path="/my appointments" element={
              <>
              <Appointments></Appointments>
              </>
            }></Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
