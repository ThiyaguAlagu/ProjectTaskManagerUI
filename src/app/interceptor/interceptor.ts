import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
@Injectable()

export class Interceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {
           
            if (request.url.endsWith('/api/task/GetAllTasks') && request.method === 'GET') {

                request = request.clone({url: 'assets/tasks.json',method:"GET"});
            }

            if (request.url.includes('/api/task/GetTask') && request.method === 'GET') {

                request = request.clone({url: 'assets/task.json',method:"GET"});
            }

            if (request.url.endsWith('/api/task/UpdateTask') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/task/AddTask') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }
            

            if (request.url.endsWith('/api/task/DeleteTask') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/task/EndTask') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/task/GetAllTypeOfTasks') && request.method === 'GET') {

                request = request.clone({url: 'assets/alltypes-tasks.json',method:"GET"});
            }

            if (request.url.endsWith('/api/task/getAllParentTasks') && request.method === 'GET') {

                request = request.clone({url: 'assets/parent-tasks.json',method:"GET"});
            }

            if (request.url.endsWith('/api/project/GetAllProjects') && request.method === 'GET') {

                request = request.clone({url: 'assets/projects.json',method:"GET"});
            }

            if (request.url.includes('/api/project/GetProject') && request.method === 'GET') {

                request = request.clone({url: 'assets/project.json',method:"GET"});
            }

            if (request.url.endsWith('/api/project/UpdateProject') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/project/AddProject') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/user/GetAllUsers') && request.method === 'GET') {

                request = request.clone({url: 'assets/users.json',method:"GET"});
            }

            if (request.url.includes('/api/user/GetUser') && request.method === 'GET') {

                request = request.clone({url: 'assets/user.json',method:"GET"});
            }

            if (request.url.endsWith('/api/user/UpdateUser') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }

            if (request.url.endsWith('/api/user/AddUser') && request.method === 'POST') {

                request = request.clone({url: 'assets/result.json',method:"GET"});
            }
            return next.handle(request);

        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }

}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
};

