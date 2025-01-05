import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);
  const startTimer = () => {
    if (ref.current !== null) {
      return;
    }
    ref.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime >= 10) {
          clearInterval(ref.current);
          return 0;
        }
        return prevTime + 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div className="App">
      <h1>Counter:{timer}</h1>
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
