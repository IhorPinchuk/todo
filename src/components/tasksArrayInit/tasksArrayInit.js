import { v4 as uuidv4 } from "uuid";

export const tasksArrayInit = [
    { id: uuidv4(), name: "Task 1", isActive: true },
    { id: uuidv4(), name: "Task 2", isActive: false },
    { id: uuidv4(), name: "Task 3", isActive: true },
    { id: uuidv4(), name: "Task 4", isActive: false },
    { id: uuidv4(), name: "Task 5", isActive: true },
];
