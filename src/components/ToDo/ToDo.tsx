import { ToDoTask } from "../../types";
import ToDoStyled from "./ToDoStyled";

interface ToDoProps {
  toDo: ToDoTask[];
}

const ToDo = ({ toDo: [{ name }] }: ToDoProps): JSX.Element => {
  return (
    <ToDoStyled className="card">
      <span>{name}</span>
    </ToDoStyled>
  );
};

export default ToDo;
