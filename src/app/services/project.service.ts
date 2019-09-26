import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';
import { Project } from 'src/app/entities/project';


@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.apiUrl+"/api/project/GetAllProjects");
  }

  getProject(projectId: Number): Observable<Project> {
    return this.http.get<Project>(environment.apiUrl+"/api/project/GetProject?id=" + projectId);
  }

  updateProject(project:Project): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/project/UpdateProject",project);
  }

  addProject(project:Project): Observable<boolean> {
    return this.http.post<boolean>(environment.apiUrl+"/api/project/AddProject",project);
  }
}
