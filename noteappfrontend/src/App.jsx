import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import NotePages from "./pages/NotePages";
import NotesListsPage from "./pages/NotesListsPage";
import { useEffect, useState } from "react";


function getDefaultMode() {
  const savedMode = localStorage.getItem("mode");
  return savedMode ? savedMode : "light";
}

function App() {
  const [mode, setMode] = useState(getDefaultMode());

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <Router>
      <div className="container ">

        <div className="app">       
         <div
          className="mode-switch"
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
          {mode === "dark" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </div>
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListsPage />} />
            <Route path="/note/:id" element={<NotePages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
