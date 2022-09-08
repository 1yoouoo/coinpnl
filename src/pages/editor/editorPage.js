import { useState } from "react";

const EditorPage = () => {
  // 1. list loop -> <div>
  // 2. add item
  const itemList = [
    {
      id: "1",
      desc: "asd",
    },
    {
      id: "2",
      desc: "asd",
    },
    {
      id: "3",
      desc: "asd",
    },
    {
      id: "4",
      desc: "asd",
    },
  ];
  const [list, setList] = useState(itemList);
  // const list = List<Item>()
  const addsomething = () => {
    // add item
    // list.add(item)
  };
  return (
    <div>
      <div>screenshot</div>

      <div>
        {list.map((item) => {
          return <div key={item.id}>item = {item.desc}</div>;
        })}

        <div onClick={addsomething}>add</div>
      </div>
    </div>
  );
};

export default EditorPage;
