import React, { setState, useRef, useState } from "react";
import "./editorPage.css";
import ItemEditor from "./itemEditor";

const EditorPage = ({ onCreate }) => {
  const entrypriceInput = useRef();
  const percentageInput = useRef();
  const explanationInput = useRef();
  const [state, setState] = useState({
    rows: [
      {
        entryPrice: "",
        percentage: "",
        explanation: "",
      },
    ],
  });

  const handleChangeState = (e) => {
    console.log("<<<<<", state);
    // console.log({ ...state, [e.target.name]: e.target.value })
    // setState({ ...state, [e.target.name]: e.target.value });
    setState({
      rows: [
        {
          ...state.rows[0],
          [e.target.name]: e.target.value,
        },
      ],
    });
    console.log(">>>>>>>>>", state);
  };

  const handleSubmit = () => {
    if (state.rows[0]["entryPrice"].length < 4) {
      entrypriceInput.current.focus();
      return;
    }
    if (state.rows[0]["percentage"].length < 2) {
      percentageInput.current.focus();
      return;
    }
    if (state.rows[0]["explanation"].length < 2) {
      explanationInput.current.focus();
      return;
    }
    // onCreate(
    //   state.rows[0]["entryPrice"],
    //   state.rows[0]["percentage"],
    //   state.rows[0]["explanation"]
    // );
    console.log("save!!!", state.rows);
    setState({
      rows: [
        {
          entryPrice: "",
          percentage: "",
          explanation: "",
        },
      ],
    });

    alert("저장 성공!");
  };
  const handleAddRow = () => {
    const tableItem = {
      entryPrice: "",
      percentage: "",
      explanation: "",
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
              <th>EntryPrice</th>
              <th>Percentage</th>
              <th>Explanation</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {state.rows.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}TRY</td>
                <td>
                  <input
                    ref={entrypriceInput}
                    type="text"
                    name="entryPrice"
                    value={state.rows[0]["entryPrice"]}
                    className="entryprice"
                    onChange={handleChangeState}
                  />
                </td>
                <td>
                  <input
                    ref={percentageInput}
                    type="text"
                    name="percentage"
                    value={state.rows[0]["percentage"]}
                    className="percentage"
                    onChange={handleChangeState}
                  />
                </td>
                <td>
                  <input
                    ref={explanationInput}
                    type="text"
                    name="explanation"
                    value={state.rows[0]["explanation"]}
                    className="explanation"
                    onChange={handleChangeState}
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
