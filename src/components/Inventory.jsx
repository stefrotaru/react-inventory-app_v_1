import { useState } from "react";
import { useDrop } from "react-dnd";

import Item from "./Item";

import items from "../data/items";
import classes from "./Inventory.module.css";

function Inventory() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addItemToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBoard = (id) => {
    const itemsList = items.filter((item) => id === item.id)

    console.log(id)
    console.log(itemsList)


    setBoard((board) => [...board, itemsList[0]])
  };

  console.log(isOver)

  return (
    <>
      <div className={classes.container + " drop"} ref={drop}>
        {board.map((item) => (
          <Item id={item.id} key={item.id} image={item.image} />
        ))}
      </div>
    </>
  );
}

export default Inventory;
