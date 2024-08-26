import { useState, useRef, useEffect } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const equationRef = useRef(null);

  useEffect(() => {
    if (equationRef.current) {
      equationRef.current.scrollLeft = equationRef.current.scrollWidth;
    }
  }, [equation]);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setEquation(equation + digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
      setEquation(equation + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setEquation(equation + "0.");
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
      setEquation(equation + ".");
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
    setEquation("");
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
    setEquation(equation.slice(0, -display.length) + -parseFloat(display));
  };

  const inputPercent = () => {
    const value = parseFloat(display) / 100;
    setDisplay(String(value));
    setEquation(equation.slice(0, -display.length) + value);
  };

  const performOperation = (nextOperator) => {
    if (equation === "" || waitingForOperand) {
      setEquation(display + " " + nextOperator + " ");
    } else {
      setEquation(equation + " " + nextOperator + " ");
    }
    setDisplay(String(evaluate(equation)));
    setWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (!waitingForOperand) {
      try {
        const result = evaluate(equation);
        setDisplay(String(result));
        setEquation(equation + " = " + result);
      } catch (error) {
        setDisplay("Error");
      }
      setWaitingForOperand(true);
    }
  };

  const evaluate = (expr) => {
    // Replace '×' with '*' and '÷' with '/' for evaluation
    const sanitizedExpr = expr.replace(/×/g, "*").replace(/÷/g, "/");
    // eslint-disable-next-line no-new-func
    return Function(`'use strict'; return (${sanitizedExpr})`)();
  };

  const buttonClass = "text-3xl h-24 transition-colors duration-200";
  const operatorClass = `${buttonClass} bg-[#18dae4] hover:bg-[#0b9198] hover:text-white transition-all text-black`;
  const functionClass = `${buttonClass} bg-gray-400 hover:bg-gray-300 text-black`;
  const numberClass = `${buttonClass} bg-gray-700 hover:bg-gray-600`;

  return (
    <div className="flex justify-center items-center h-fit">
      <div className="bg-black rounded-3xl overflow-hidden w-96">
        <div className="bg-[#100f10] text-white p-6 min-h-[100px] flex flex-col justify-end items-end">
          <div
            ref={equationRef}
            className="text-2xl text-[#18dae4] mb-2 h-8 w-full overflow-x-auto whitespace-nowrap"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {equation || "\u00A0"}
          </div>
          <span className="text-6xl">{display}</span>
        </div>
        <div className="grid grid-cols-4 gap-px">
          <button onClick={clearDisplay} className={functionClass}>
            AC
          </button>
          <button onClick={toggleSign} className={functionClass}>
            +/-
          </button>
          <button onClick={inputPercent} className={functionClass}>
            %
          </button>
          <button
            onClick={() => performOperation("÷")}
            className={operatorClass}
          >
            ÷
          </button>

          <button onClick={() => inputDigit(7)} className={numberClass}>
            7
          </button>
          <button onClick={() => inputDigit(8)} className={numberClass}>
            8
          </button>
          <button onClick={() => inputDigit(9)} className={numberClass}>
            9
          </button>
          <button
            onClick={() => performOperation("×")}
            className={operatorClass}
          >
            ×
          </button>

          <button onClick={() => inputDigit(4)} className={numberClass}>
            4
          </button>
          <button onClick={() => inputDigit(5)} className={numberClass}>
            5
          </button>
          <button onClick={() => inputDigit(6)} className={numberClass}>
            6
          </button>
          <button
            onClick={() => performOperation("-")}
            className={operatorClass}
          >
            -
          </button>

          <button onClick={() => inputDigit(1)} className={numberClass}>
            1
          </button>
          <button onClick={() => inputDigit(2)} className={numberClass}>
            2
          </button>
          <button onClick={() => inputDigit(3)} className={numberClass}>
            3
          </button>
          <button
            onClick={() => performOperation("+")}
            className={operatorClass}
          >
            +
          </button>

          <button
            onClick={() => inputDigit(0)}
            className={`${numberClass} col-span-2`}
          >
            0
          </button>
          <button onClick={inputDecimal} className={numberClass}>
            .
          </button>
          <button onClick={handleEquals} className={operatorClass}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
