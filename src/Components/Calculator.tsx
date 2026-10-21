import React, { useState } from "react";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const [result, setResult] = useState<number>(0);
  const [operator, setOperator] = useState<string>("");

  const evaluate = () => {
    switch (operator) {
      case "+":
        setResult(firstNumber + secondNumber);
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator("");
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator("");
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator("");
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator("");
        break;
      default:
        alert("No numbers available");
    }
  };
  return (
    <div>
      <h1 className="text-center text-4xl  text-orange-600 mb-5">
        Calculator component
      </h1>
      <div className=" text-2xl text-blue-700 flex items-center justify-center gap-3">
        <input
          type="number"
          className=" border border-gray-300 w-25 h-5 p-5 "
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="border border-black w-25 h-5 p-5"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
        <span>{result}</span>
      </div>
      <div className="text-5xl flex items-center justify-center gap-5 mt-4">
        <button
          className="border border-blue-400 p-4"
          onClick={() => setOperator("+")}
        >
          +
        </button>
        <button
          className="border border-red-700 p-4"
          onClick={() => setOperator("-")}
        >
          -
        </button>
        <button
          className="border border-green-800 p-4"
          onClick={() => setOperator("/")}
        >
          /
        </button>
        <button
          className="border border-purple-900 p-4"
          onClick={() => setOperator("*")}
        >
          *
        </button>
        <button className="border border-green-900 p-4" onClick={evaluate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
