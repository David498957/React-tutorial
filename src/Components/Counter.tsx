import React, { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(1);
  const countRef = useRef<HTMLInputElement | null>(null);
  const countRefValue = () => {
    if (countRef.current) {
      console.log(countRef.current.value);
    }
  };
  const increment = () => {
    setCount((c) => c + 1);
    countRefValue();
  };
  const decrement = () => {
    if (count === 0) return;
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-purple-700">Counter</h1>
      <div>
        <div className="flex items-center justify-center mb-5">
          <input
            type="number"
            ref={countRef}
            value={count}
            placeholder="number"
            className="w-50 h-10 border border-green-500"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={increment}
            className="border border-blue-700 px-2 py-1.5 text-3xl"
          >
            Increment
          </button>
          <button
            type="button"
            onClick={decrement}
            className="border border-red-600 px-2 py-1.5 text-3xl"
          >
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
