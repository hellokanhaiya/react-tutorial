import { list } from "postcss";

const App = () => {
  let foodItem = ["Dall", "Roti", "Milk", "Ghee", "Salad", "Green Vegtrial"];
  return (
    <>
      <h1 className="text-5xl font-bold">Healty Food</h1>
      {/* yadi hame yaha js likhana to {} medium bracket ka use karna padega */}
      <ul className="felx my-4">
        {foodItem.map((item) => (
          <li className="text-3xl border-t-2 py-2 px-10">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
