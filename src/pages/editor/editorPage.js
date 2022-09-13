import React, { useState } from "react";
import "./editorPage.css";
import ItemEditor from "./itemEditor";

// + 누르면 새로운 편집창이 뜨도록 하고싶다

const EditorPage = () => {
  let itemList = [];
  // const createdDate = new Date().getTime();
  const [listByReact, setListByReact] = useState(itemList);
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
  });

  const addsomething = () => {
    setListByReact([
      ...listByReact,
      { id: listByReact.length + 1, desc: "new" },
    ]);
  };
  const handlesubmit = () => {
    console.log("aaa", state.firstName, state.lastName);
  };

  function handleInputChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  return (
    <div>
      <button className="Screenshot">Screenshot</button>

      <div>
        {listByReact.map((item) => {
          return (
            <div key={item.id}>
              {/* {item.id} TRY =({item.createdDate}, {item.desc}) */}
              <label>
                Name:
                <input
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleInputChange}
                />
              </label>
              <button onClick={handlesubmit}>*</button>
            </div>
          );
        })}

        <button onClick={addsomething}>+</button>
      </div>
    </div>
  );
};

export default EditorPage;
