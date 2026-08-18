export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: string;
}

export interface TaskFilters {
  status?: TaskStatus;
  assigneeId?: string;
}

export function tasksByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  return tasks.filter(
    (task) =>
      (!filters.status || task.status === filters.status) &&
      (!filters.assigneeId || task.assigneeId === filters.assigneeId),
  );
}

export function badgeLabel(task: Task): string {
  return task.priority[0].toUpperCase() + task.priority.slice(1);
}
