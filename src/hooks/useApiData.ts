import { useCallback } from "react";
import { loadApiActionCreator } from "../store/features/toDos/toDoSlice";
import { useAppDispatch } from "../store/hooks";
import { ToDoTask } from "../types";

interface ReceivedApiData {
  getApiData: () => void;
}

const useApiData = (): ReceivedApiData => {
  const dispatch = useAppDispatch();

  const getApiData = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_URL_API!);
    const apiData = (await response.json()) as ToDoTask[];

    dispatch(loadApiActionCreator(apiData));
  }, [dispatch]);

  return { getApiData };
};

export default useApiData;
