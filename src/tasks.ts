export type TaskStatus = "todo" | "doing" | "done";

export type TaskPriority = "low" | "normal" | "high";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigneeId: string;
}

export function tasksByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

export function tasksByAssignee(tasks: Task[], assigneeId: string): Task[] {
  return tasks.filter((task) => task.assigneeId === assigneeId);
}

export function badgeLabel(task: Task): string {
  return task.priority[0].toUpperCase() + task.priority.slice(1);
}
