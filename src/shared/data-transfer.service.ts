import { Injectable } from '@angular/core';
import { Task } from 'src/app/entities/task';



@Injectable()
export class DataTransferService {

    public task: Task;
    constructor() { }
}