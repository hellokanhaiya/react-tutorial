import Item from "./Item";
const FoodItem = ({ items }) => {
  // let foodItem = ["Dall", "Roti", "Milk", "Ghee", "Salad", "Green Vegtrial"];
  return (
    <ul className="felx my-4">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItem;
