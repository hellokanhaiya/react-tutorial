import { list } from "postcss";
import MainHeading from "./components/Mainheading";
import InputItme from "./components/Input";
import TodoItems from "./components/Todoitems";
import Todoitem from "./components/todoitem";
function App() {
  const todoitems = [
    {
      name: "By milk",
      date: "4/10/2023",
    },
    {
      name: "Go to collage",
      date: "4/10/2023",
    },
    {
      name: "Like the video",
      date: "14/03/2024",
    },
  ];

  return (
    <>
      <MainHeading />
      <InputItme />
      <TodoItems todoitems={todoitems}></TodoItems>
    </>
  );
}

export default App;
