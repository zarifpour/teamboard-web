import assert from "node:assert/strict";
import test from "node:test";

import {
  badgeLabel,
  mobileDrawerWidth,
  tasksByStatus,
  type Task,
} from "../src/tasks.js";

const tasks: Task[] = [
  {
    id: "task-1",
    title: "Design task board",
    status: "todo",
    priority: "high",
    assigneeId: "user-1",
  },
  {
    id: "task-2",
    title: "Build task filters",
    status: "doing",
    priority: "normal",
    assigneeId: "user-2",
  },
  {
    id: "task-3",
    title: "Ship first release",
    status: "done",
    priority: "low",
    assigneeId: "user-1",
  },
];

test("tasksByStatus returns only tasks with the requested status", () => {
  assert.deepEqual(tasksByStatus(tasks, "doing"), [tasks[1]]);
});

test("badgeLabel labels high-priority tasks as High", () => {
  assert.equal(badgeLabel(tasks[0]), "High");
});

test("keeps a sixteen-pixel gutter on each side", () => {
  assert.equal(mobileDrawerWidth(360), 328);
});
