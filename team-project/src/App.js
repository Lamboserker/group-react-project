import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage';
import Blog from './components/Blog';
import Shop from './components/Shop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<LandingPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shop" element={<Shop />} />
            {/*<Route path="*" element={PageNotFound} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
