import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DataTableModule} from 'primeng/datatable';
import {GrowlModule} from 'primeng/growl';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TaskService } from './services/task.service';
import { ViewTaskComponent } from './view-task/view-task.component';
import { Interceptor, fakeBackendProvider } from './interceptor/interceptor';
import { DataTransferService } from 'src/shared/data-transfer.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { AddUserComponent } from './add-user/add-user.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/viewtask', pathMatch: 'full' },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'edittask', component: AddTaskComponent },
  { path: 'viewtask', component: ViewTaskComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'adduser', component: AddUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    AddProjectComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,DataTableModule,GrowlModule,ConfirmDialogModule,SliderModule,CalendarModule
  ],
  providers: [TaskService, ProjectService, UserService, DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
