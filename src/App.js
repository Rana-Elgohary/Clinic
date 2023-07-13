import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

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
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
