export interface ITask {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  owner: string;
  _id?: string;
}

export interface IBoard {
  title?: string;
  hashedID?: string;
  _id?: string;
}

export interface IBoardState {
  board: IBoard | null;
  isLoading: boolean;
  error: string | null;
}

export interface ITaskState {
  tasks: ITask[];
  isTaskLoading: boolean;
  error: string | null;
}

