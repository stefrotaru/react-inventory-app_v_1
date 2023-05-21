import items from "../data/items";
import Item from "./Item";

import classes from "./Items.module.css";

function Items() {
  return (
    <>
      <div className={classes.container + " drag"}>
        {items.map(item => <Item key={item.id} id={item.id} image={item.image}/>)}
      </div>
    </>
  );
}

export default Items;
