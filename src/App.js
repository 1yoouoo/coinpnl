import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/main/mainPage";
import EditorPage from "./pages/editor/editorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </div>
  );
}

export default App;
