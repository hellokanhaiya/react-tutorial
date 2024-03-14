const InputItme = () => {
  return (
    <>
      <div className="flex justify-between text-left mx-20 my-10">
        <div className="w-2/5 h-10">
          <input
            className="border-2 border-black w-full h-full placeholder:text-2xl pl-4"
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="w-2/5 h-10">
          <input
            className="border-2 border-black w-full h-full placeholder:text-2xl pl-4"
            type="date"
          />
        </div>
        <div className="w-24 h-10">
          <button className="w-full h-full text-white rounded bg-green-800">
            Add
          </button>
        </div>
      </div>
    </>
  );
};
export default InputItme;
