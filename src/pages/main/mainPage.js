import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import EditorPage from "../editor/editorPage";

// () => console.log("hehe click")
//vs
// console.log("hehhe")

const MainPage = () => {
  let navigate = useNavigate();
  const toEditorPage = () => {
    let editorPath = "/editor";
    navigate(editorPath);
  };

  return (
    <div>
      <div>header</div>
      <div>
        content
        <div>
          list
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <button onClick={toEditorPage}>add</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
