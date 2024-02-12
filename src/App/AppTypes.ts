export interface IBoard {
  title?: string;
  hashedID?: string;
  _id?: string;
  tasks?: ITask[];
}

export interface IBoardState {
  board: IBoard | null;
  isLoading: boolean;
  error: string | null;
}

export interface ITask {
  title: string;
  description: string;
  status: "to do" | "in-progress" | "done";
  columnIndex: number;
}