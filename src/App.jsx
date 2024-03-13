import { list } from "postcss";
import FoodItem from "./components/FoodItems";
import Errormess from "./components/ErrorMess";

///  Condition Sentence
const App = () => {
  let foodItem = ["Dall", "Roti", "Milk", "Ghee", "Salad", "Green Vegtrial"];
  // let foodItem = [];
  //  if else statement
  // if (foodItem1.length === 0) {
  //   return <h1>I am still hungry</h1>;
  // f
  return (
    <>
      <h1 className="text-5xl font-bold color">Healty Food</h1>
      <FoodItem items={foodItem}></FoodItem>
      <Errormess items={foodItem}></Errormess>
    </>
  );
};

export default App;
