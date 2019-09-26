import { Project } from "src/app/entities/project";
import { User } from "src/app/entities/user";

export interface Task {
    taskId: Number;
    parentId: Number;
    taskName: String;
    priority: Number;
    startDate: Date;
    endDate: Date;
    parent: ParentTask;
    status:Boolean,
    projectId?: Number,
    userId?: Number,
    project: Project,
    user: User
}

export interface ParentTask {
    parentId: Number
    parentTaskName: String
}
