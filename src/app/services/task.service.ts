import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';
import { Task, ParentTask } from 'src/app/entities/task';


@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.apiUrl+"/api/task/GetAllTasks");
  }

  getTask(taskId: Number, isParent:Boolean): Observable<Task> {
    return this.http.get<Task>(environment.apiUrl+"/api/task/GetTask?id=" + taskId + "&isParent=" + isParent);
  }

  updateTask(task:Task): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/task/UpdateTask",task);
  }

  addTask(task:Task): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/task/AddTask",task);
  }

  deleteTask(task:Task): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/task/DeleteTask",task);
  }
  
  endTask(task:Task): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/task/EndTask",task);
  }

  getAllTypeOfTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(environment.apiUrl+"/api/task/GetAllTypeOfTasks");
    
  }

  getAllParentTasks(): Observable<ParentTask[]> {
    return this.http.get<ParentTask[]>(environment.apiUrl+"/api/task/getAllParentTasks");
    
  }
}


