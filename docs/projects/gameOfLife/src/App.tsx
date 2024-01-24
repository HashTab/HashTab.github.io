import { useEffect, useRef, useState } from "react";
import { IoIosPlay, IoIosPause } from "react-icons/io";
import { BiReset } from "react-icons/bi";

const cols = 40;
const rows = 40;

const cellSize = 10;

const positions: number[][] = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const App: React.FC = () => {
  const [grid, setGrid] = useState<number[][]>([]);
  const [start, setStart] = useState<boolean>(false);
  const [iteration, setIteration] = useState<number>(0);
  const [customInterval, setCustomInterval] = useState<number>(100);
  const [population, setPopulation] = useState<number>(0);
  const [prevPopulation, setPrevPopulation] = useState<number>(0);
  const [unchangedPopulationCounter, setUnchangedPopulationCounter] =
    useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startRef = useRef<boolean>(start);
  const intervalRef = useRef<number | null>(null);
  startRef.current = start;

  const randomGrid = (): number[][] => {
    let startPopulation = 0;
    const grid: number[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 1.2));
        if (row[j] === 1) {
          startPopulation++;
        }
      }
      grid.push(row);
    }
    setPopulation(startPopulation);
    setPrevPopulation(startPopulation);
    return grid;
  };

  const drawGrid = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      grid.forEach((rows, i) => {
        rows.forEach((col, j) => {
          ctx.fillStyle = col ? "#00ff00" : "#0f0f0f";
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        });
      });
    }
  };

  useEffect(() => {
    setGrid(randomGrid());
  }, []);

  const runSimulation = () => {
    if (!startRef.current) {
      return;
    }
    setGrid((g) => {
      let newPopulation = 0;

      const next = g.map((row, i) => {
        return row.map((_, j) => {
          let sum = 0;
          positions.forEach((position) => {
            const x = i + position[0];
            const y = j + position[1];
            if (x >= 0 && x < rows && y >= 0 && y < cols) {
              sum += g[x][y];
            }
          });
          if (sum < 2 || sum > 3) {
            return 0;
          }
          if (sum === 3) {
            return 1;
          }
          return g[i][j];
        });
      });

      for (const row of g) {
        for (const element of row) {
          if (element === 1) {
            newPopulation++;
          }
        }
      }

      if (newPopulation === prevPopulation) {
        setUnchangedPopulationCounter((counter) => counter + 1);
        if (unchangedPopulationCounter >= 50) {
          console.log("----RESTART----");
          setGrid(randomGrid());
          setIteration(0);
          setUnchangedPopulationCounter(0);
        }
      } else {
        setPrevPopulation(newPopulation);
        setUnchangedPopulationCounter(0);
      }
      setPopulation(newPopulation);

      drawGrid();
      return next;
    });
  };

  useEffect(() => {
    if (startRef.current) {
      clearInterval(intervalRef.current as number);
      intervalRef.current = setInterval(() => {
        runSimulation();
        setIteration((prevIteration) => prevIteration + 1);
      }, customInterval);
    }
  }, [
    customInterval,
    startRef.current,
    prevPopulation,
    unchangedPopulationCounter,
  ]);

  drawGrid();

  return (
    <div className="flex flex-col items-center text-white text-2xl">
      <div>
        <div className="flex items-center justify-start w-full text-lg mt-12">
          Population:
          <span className="ml-2 w-[50px] inline-block">{population}</span>
          <div className="flex gap-4 flex-1 justify-end">
            <button
              onClick={() => {
                setStart(!start);
                if (!start) {
                  startRef.current = true;
                } else {
                  startRef.current = false;
                  clearInterval(intervalRef.current as number);
                  intervalRef.current = null;
                }
              }}
            >
              {start ? <IoIosPause /> : <IoIosPlay />}
            </button>
            <button
              onClick={() => {
                setGrid(randomGrid());
                setIteration(0);
              }}
            >
              <BiReset />
            </button>
          </div>
        </div>
        <canvas
          className="shadow mt-4"
          ref={canvasRef}
          width={cols * cellSize}
          height={rows * cellSize}
        />
        <div className="flex items-center justify-between w-full mt-4 text-lg">
          <div className="flex items-center gap-2">
            Interval:
            <input
              className="max-w-[50px] bg-transparent"
              type="number"
              value={customInterval}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setCustomInterval(isNaN(value) ? value : value);
              }}
              min="0"
            />
            <button
              onClick={() => {
                setCustomInterval((prevInterval) => prevInterval + 100);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setCustomInterval((prevInterval) =>
                  Math.max(prevInterval - 100, 0)
                );
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                setCustomInterval(100);
              }}
            >
              <BiReset />
            </button>
          </div>
          <p>
            Iteration:
            <span className="ml-2 w-[30px] inline-block">{iteration}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
