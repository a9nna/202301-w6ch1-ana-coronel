import { useEffect } from "react";
import AppStyled from "./AppStyled";
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
    <AppStyled>
      <h1>To Do list</h1>
      <ToDos toDos={toDos}></ToDos>
    </AppStyled>
  );
};

export default App;
