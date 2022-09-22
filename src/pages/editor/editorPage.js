import React, { setRows, useRef, useState } from "react";
import "./editorPage.css";
import ItemEditor from "./itemEditor";

// 2. rows 1개만 가정한 코드

const EditorPage = ({ onCreate }) => {
  const entrypriceInput = useRef();
  const percentageInput = useRef();
  const explanationInput = useRef();

  const [rows, setRows] = useState([
    {
      entryPrice: "as",
      percentage: "asss",
      explanation: "aada",
    },
    {
      entryPrice: "1123",
      percentage: "123144",
      explanation: "132213",
    },
  ]);

  const handleChangeState = (e, idx) => {
    let tmp_rows = [...rows];
    for (let tmp_rows_idx = 0; tmp_rows_idx < tmp_rows.length; tmp_rows_idx++) {
      console.log(tmp_rows_idx, tmp_rows[tmp_rows_idx]);
      if (tmp_rows_idx == idx) {
        tmp_rows[tmp_rows_idx][e.target.name] = e.target.value;
      }
    }
    setRows(tmp_rows);
  };

  const handleSubmit = () => {
    if (rows[0]["entryPrice"].length < 4) {
      entrypriceInput.current.focus();
      return;
    }
    if (rows[0]["percentage"].length < 2) {
      percentageInput.current.focus();
      return;
    }
    if (rows[0]["explanation"].length < 2) {
      explanationInput.current.focus();
      return;
    }
    // onCreate(
    //   state.rows[0]["entryPrice"],
    //   state.rows[0]["percentage"],
    //   state.rows[0]["explanation"]
    // );
    console.log("save!!!", rows);
    setRows([
      {
        entryPrice: "",
        percentage: "",
        explanation: "",
      },
    ]);

    alert("저장 성공!");
  };
  const handleAddRow = () => {
    const tableItem = {
      entryPrice: "",
      percentage: "",
      explanation: "",
    };
    setRows([...rows, tableItem]);
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
              <th>EntryPrice</th>
              <th>Percentage</th>
              <th>Explanation</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}TRY</td>
                <td>
                  <input
                    ref={entrypriceInput}
                    type="text"
                    name="entryPrice"
                    value={rows[idx]["entryPrice"]}
                    className="entryprice"
                    onChange={(e) => handleChangeState(e, idx)}
                  />
                </td>
                <td>
                  <input
                    ref={percentageInput}
                    type="text"
                    name="percentage"
                    value={rows[idx]["percentage"]}
                    className="percentage"
                    onChange={(e) => handleChangeState(e, idx)}
                  />
                </td>
                <td>
                  <input
                    ref={explanationInput}
                    type="text"
                    name="explanation"
                    value={rows[idx]["explanation"]}
                    className="explanation"
                    onChange={(e) => handleChangeState(e, idx)}
                  />
                </td>
                <td>
                  <button onClick={handleSubmit}>저장</button>
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
