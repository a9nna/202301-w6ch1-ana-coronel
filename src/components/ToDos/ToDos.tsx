import { ToDoTask } from "../../types";
import ToDo from "../ToDo/ToDo";
import ToDosStyled from "./ToDosStyled";

interface ToDosProps {
  toDos: ToDoTask[];
}

const ToDos = ({ toDos }: ToDosProps): JSX.Element => {
  return (
    <ToDosStyled>
      {toDos.map((task) => (
        <li key={task.id}>
          <ToDo toDo={task} />
        </li>
      ))}
    </ToDosStyled>
  );
};

export default ToDos;
