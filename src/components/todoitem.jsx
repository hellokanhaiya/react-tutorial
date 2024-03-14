const Todoitem = ({ todoItem, tododate }) => {
  return (
    <>
      <div className="flex justify-between text-left mx-20 my-10">
        <div className="w-2/5 h-10 text-3xl font-bold ">{todoItem}</div>
        <div className="w-2/5 h-10 text-3xl font-bold">{tododate}</div>
        <div className="w-24 h-10">
          <button className="w-full h-full text-white rounded bg-red-800">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Todoitem;
