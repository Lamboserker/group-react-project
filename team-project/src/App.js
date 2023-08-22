import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage';
import SearchResult from "./components/SearchResult";
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<LandingPage />} />
            <Route path="blogs" element={<LandingPage />} />
            <Route path="/test" element={<Test />} />
            {/*<Route path="*" element={PageNotFound} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
