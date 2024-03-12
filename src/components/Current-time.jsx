function CurrentTime() {
  let time = new Date();
  return (
    <div>
      <p className="text-center my-10 text-5xl">
        This is the Current time: {time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default CurrentTime;
