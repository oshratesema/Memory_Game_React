import React, { useState } from "react";
import Card from "./Card";

export default function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/assets/html.png", state: "" },
      { id: 1, img: "/assets/html.png", state: "" },
      { id: 2, img: "/assets/css.png", state: "" },
      { id: 2, img: "/assets/css.png", state: "" },
      { id: 3, img: "/assets/js.png", state: "" },
      { id: 3, img: "/assets/js.png", state: "" },
      { id: 4, img: "/assets/scss.png", state: "" },
      { id: 4, img: "/assets/scss.png", state: "" },
      { id: 5, img: "/assets/react.png", state: "" },
      { id: 5, img: "/assets/react.png", state: "" },
      { id: 6, img: "/assets/vue.png", state: "" },
      { id: 6, img: "/assets/vue.png", state: "" },
      { id: 7, img: "/assets/angular.png", state: "" },
      { id: 7, img: "/assets/angular.png", state: "" },
      { id: 8, img: "/assets/nodejs.png", state: "" },
      { id: 8, img: "/assets/nodejs.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prevClick, setPrevClick] = useState(-1);

  const check = () => {
    if (items[current].id == items[prev].id) {
      items[current].state = "correct";
      items[prev].id = "correct";
      setPrevClick(-1)
    }else{

    }
  };

  const handleClick = (id) => {
    // items[id].state = 'active'
    // setItems([...items])

    if (prevClick === -1) {
        items[id].state = 'active'
        setItems([...items])
      setPrevClick(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}
