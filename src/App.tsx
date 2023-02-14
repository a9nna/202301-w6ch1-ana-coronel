import { useEffect } from "react";
import ToDo from "./components/ToDo/ToDo";
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
      <ToDo toDo={toDos}></ToDo>
    </div>
  );
};

export default App;
