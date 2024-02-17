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

export interface ITask extends BaseTask {
  _id: string;
}

export interface BaseTask {
  title: string;
  description: string;
  status: "to do" | "in-progress" | "done";
  columnIndex: number;
  owner: string;
}

export interface ITaskState {
  tasks: ITask[];
  isTaskLoading: boolean;
  error: string | null;
}