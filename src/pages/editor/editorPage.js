import React, { setState, useState } from "react";
import "./editorPage.css";
import ItemEditor from "./itemEditor";

const EditorPage = () => {
  const [state, setState] = useState({
    rows: [
      {
        진입가격: "",
        PERCENTAGE: "",
        진입근거: "",
      },
    ],
  });

  const handleAddRow = () => {
    const tableItem = {
      진입가격: "",
      PERCENTAGE: "",
      진입근거: "",
    };
    setState({
      rows: [...state.rows, tableItem],
    });
  };

  return (
    <div>
      <div className="Screenshot">
        <button>Screenshot</button>
      </div>

      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>TRY</th>
              <th>진입가격</th>
              <th>PERCENTAGE</th>
              <th>진입근거</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {state.rows.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}TRY</td>
                <td>
                  <input type="text" name="asd" />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <input />
                </td>
                <td>
                  <button>저장</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="AddButton">
        <button onClick={handleAddRow}>+</button>
      </div>
    </div>
  );
};

export default EditorPage;
