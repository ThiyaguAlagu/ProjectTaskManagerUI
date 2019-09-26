import { User } from "src/app/entities/user";

export interface Project
{
    projectId: Number,
    projectName: String,
    startDate?: Date,
    endDate?: Date,
    priority: Number,
    managerId: Number,
    projectManager: User,
    status: String
}
