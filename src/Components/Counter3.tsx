import { useState } from "react";
const Counter3 = () => {
  const [count, setCount] = useState<number>(1);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    if (count === 0) return;
    setCount((c) => c - 1);
  };

  return (
    <div>
      <div className="text-center text-5xl text-blue-700">Counter</div>
      <div className="flex items-center justify-center mb-3">
        <input
          type="number"
          value={count}
          placeholder="number"
          className=" w-50 h-10 border border-purple-950"
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={increment}
          className=" border border-amber-500 px-2 py-1.5 text-3xl "
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          className="border border-red-950 px-2 py-1.5 text-3xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter3;
