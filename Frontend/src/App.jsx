import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/login";
import MainChat from "./pages/MainChat";
import './assets/prism.css'
import Loading  from "./pages/loading";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const{pathname} = useLocation()


  return (
    <Routes>
      {/* <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

      <Route
        path="/chat"
        element={isLoggedIn ? <MainChat /> : <Navigate to="/login" />}
      />

      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/chat" : "/login"} />}
      /> */}
<Route path="/" element={<MainChat />} />  {/* remove this when login is done */}
<Route path="/loading" element={<Loading />} />   {/* add it in a way that, if user is not logged in, loading will take us to login page */}

    </Routes>
  );
}