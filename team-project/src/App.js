import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import SearchProvider from "./Context/SearchProvider";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<LandingPage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="shop" element={<Shop />} />

              {/*<Route path="*" element={PageNotFound} />*/}
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
}

export default App;
