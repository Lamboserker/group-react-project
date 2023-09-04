import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";
import myProfile from "./components/myProfile";
import SearchProvider from "./Context/SearchProvider";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import ToBecontinued from "./components/ToBecontinued";
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<LandingPage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="myProfile" element={<myProfile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="tbc" element={<ToBecontinued />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
           
            
            
          </Routes>
        </HashRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
