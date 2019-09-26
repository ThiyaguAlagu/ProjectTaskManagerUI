import { Project } from "src/app/entities/project";
import { Task } from "src/app/entities/task";

export interface User
{
    userId: Number,
    firstName: String,
    lastName: String,
    employeeId: Number,
    projectId?: Number,
    taskId?: Number,
    userProject: Project,
    userTask: Task,
    isDeleted: Boolean
}
