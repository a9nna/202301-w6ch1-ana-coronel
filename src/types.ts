export interface ToDoTask {
  id: number;
  isDone: boolean;
  name: string;
}
export interface ApiData {
  tasks: ToDoTask[];
}
