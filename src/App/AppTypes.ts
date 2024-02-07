export interface ITask {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  owner: string;
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

export interface IData {
  board: IBoard;
  tasks: ITask[];
}
