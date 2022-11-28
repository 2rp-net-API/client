import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { RequireAuth } from "./context/RequireAuth";
import { Home } from "./pages/Home";
import { HoraExtra } from "./pages/HoraExtra";
import { Private } from "./pages/Private";

function App() {
  return (
    <div className="App">
      <RequireAuth>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/private" element={<Private />} />
            <Route path="/horaextra" element={<HoraExtra />} />
          </Routes>
        </div>
      </RequireAuth>
    </div>
  );
}

export default App;
