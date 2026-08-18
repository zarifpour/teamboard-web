export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: string;
}

export interface SavedBoardView {
  id: string;
  name: string;
  status?: TaskStatus;
  assigneeId?: string;
}

export function tasksByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

export function tasksForSavedView(tasks: Task[], view: SavedBoardView): Task[] {
  return tasks.filter(
    (task) =>
      (view.status === undefined || task.status === view.status) &&
      (view.assigneeId === undefined || task.assigneeId === view.assigneeId),
  );
}

export function badgeLabel(task: Task): string {
  return task.priority[0].toUpperCase() + task.priority.slice(1);
}
