import { useEffect } from "react";
import ToDos from "./components/ToDos/ToDos";
import useApiData from "./hooks/useApiData";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { getApiData } = useApiData();

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const toDos = useAppSelector((state) => state.tasks);

  return (
    <div className="App">
      <ToDos toDos={toDos}></ToDos>
    </div>
  );
};

export default App;
