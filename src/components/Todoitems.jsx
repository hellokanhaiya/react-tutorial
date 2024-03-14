import Todoitem from "./todoitem";
// const TodoItems = ({ todoitems }) => {
//   return (
//     <>

//     {
//       todoitems.map((item)=>{

//       })
//     }
//       <FirstItem {todoitems.name} todoItem="By milk"></FirstItem>
//       <SecondItem tododate="4/10/2023" todoItem="Go to collage"></SecondItem>
//     </>
//   );
// };
// export default TodoItems;

const Todoitems = ({ todoitems }) => {
  return (
    <>
      <div className="items-container">
        {todoitems.map((item) => (
          <Todoitem tododate={item.date} todoItem={item.name}></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
