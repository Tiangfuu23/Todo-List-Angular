export interface TodoItem {
  title: string;
  completed?: boolean; // ? -> optinal operator
  creationTime?: string | undefined;
  completionTime?: string | undefined;
  deletionTime?: string | undefined;
}
