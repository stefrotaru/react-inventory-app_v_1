/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

function Item({ id, image }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: {id: id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      id={id}
      src={image}
      style={{ border: isDragging ? "5px solid green" : "0px" }}
    />
  );
}

export default Item;
